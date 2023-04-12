const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/user");

const sequelize = new Sequelize("user", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

const User = UserModel(sequelize, DataTypes);

User.create({
  username: "test",
  password: "123456",
}).then((user) => console.log(user.toJSON()));


module.exports = {
    User
}