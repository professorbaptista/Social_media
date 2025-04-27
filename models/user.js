
const {DataTypes} = require('sequelize');
const Database = require('../Database/connect');
const User = Database.define('user', {
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    senha: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User;