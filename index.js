// Importação dos pacotes
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session')
const fileStore = require('session-file-store')(session);
const flash  = require('express-flash');


// SetUp do projecto com iniciialização das instancias

const app = express()

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Inportanndo o banco de dados
const connect = require('./Database/connect');

// importando os models
const Thought = require('./models/thoughts');
const User = require('./models/user')

// Configuraçao de session midlewares
app.use(session({
    name: 'session',
    secret: 'meu_secredo_pensa',
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
        logFn: function(){},
        path: require('path').join(('os'))
    }),

    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true,
    }
})) 

// Configuração de flash message
app.use(flash());

// inicializando o midlewire
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }
    next()
})
 
// Middleware to parse JSON bodies 
app.use(express.urlencoded({
    extended: true
}))


app.use(express.json()); 

// Importação de rotas
const ThoughtRouter = require('./rotas/thoughtsrouter');
const ThoughtController = require('./controllers/thoughtController')
const authRoutes = require('./rotas/authRoutes');


// Configuraçao de rotas
app.use('/thoughts', ThoughtRouter)
app.use('/', authRoutes)
app.get('/', ThoughtController.showThought)


connect.sync().then(() => {
    app.listen(3000)
}).catch((error) => {
    console.log(error)
})


