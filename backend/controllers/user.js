const User = require("../models/User.Js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((err) => res.status(400).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "Paire identifiant/mot de passe incorrecte" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "Paire identifiant/mot de passe incorrecte" });
            } else {
              const token = jwt.sign(
                { userId: user._id },
                "RANDOM_TOKEN_SECRET",
                {
                  expiresIn: "24h",
                }
              );
              res.cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
              });
              res.status(200).json({
                userId: user._id,
                token: token,
              });
              // res.status(200).json({
              //   userId: user._id,
              //   token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              //     expiresIn: "24h",
              //   }),
              // });
            }
          })
          .catch((err) => res.status(500).json({ err }));
      }
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.check = (req, res, next) => {
  const cookies = req.headers.cookie;
  const tokenCookie = cookies && cookie.parse(cookies).token; // extraire le cookie "token" si présent

  try {
    const token = tokenCookie;
    console.log(token);
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    console.log("OK TOKEN ");
    User.findOne({ _id: userId })
      .then((user) => {
        if (!user) {
          throw "Utilisateur non trouvé !";
        } else {
          req.userId = userId;
          req.user = user;
          res.status(200).json({userId})
          
        }
      })
      .catch((error) => res.status(401).json({ error: error }));
  } catch {
    res.status(401).json({
      error: new Error("Requête non authentifiée !"),
    });
  }
};
