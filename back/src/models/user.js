module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      username: {
        type: DataTypes.STRING,
        unique:{
            msg: 'Ce mail est déjà utilisé'
        }
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  });
};
