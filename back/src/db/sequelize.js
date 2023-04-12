const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/user");
const bcrypt = require('bcrypt')

const sequelize = new Sequelize("user", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

const User = UserModel(sequelize,DataTypes)


const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
      User.create({
        username: User.username,
        password: User.password,
      }).then(user => console.log(user.toJSON()))
    })
  }
// User.create({
//   username: 'test',
//   password: "123456"
// }).then((user) => console.log(user.toJSON()));


module.exports = {
    initDb,User
}