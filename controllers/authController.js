
const User = require('../models/user')
const bscript = require('bscript')

module.exports = class AuthController {

    // Função da rota login
    static login(req, res){
        res.render('auth/login')
    }

     // Função da rota register
    static register(req, res){
        res.render('auth/register')
    }
    // router.post("/register", async (req, res)
     // Função da rota registerPost
     static async registerPost(req, res){
         // Requisitando os daods do body
         const { name, email, password, confirmpassword } = req.body;

         // validando a senha
         if (password != confirmpassword) {
            req.flash('message', 'As senhas não confere, tente novamente mais tarde.')
            res.render('auth/register')
            return;
         }
     }
    
}