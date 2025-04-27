
const {DataTypes} = require('sequelize');

const Database = require('../Database/connect');
const User = require('../models/user');
const Thought = Database.define('thought', {
    title: {type: DataTypes.STRING,
    allowNull: false,
    required: true,    

    },
});
Thought.belongsTo(User);
User.hasMany(Thought)
module.exports = Thought
