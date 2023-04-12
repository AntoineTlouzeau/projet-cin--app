module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Cet email est déjà utilisé.",
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  });
};
