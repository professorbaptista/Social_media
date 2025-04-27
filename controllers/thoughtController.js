
const Thought = require('../models/thoughts');
const User = require('../models/user');

module.exports = class ThoughtController{
    static async showThought(req, res){
        res.render('thoughts/home')
    }
}