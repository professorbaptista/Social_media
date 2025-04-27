const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('pensamentos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

})

try {
    sequelize.authenticate();
    console.log('Conectado ao banco de dados com sequelize.')
} catch (error) {
    console.log(`Não foi possivel conectar ${error}.`)
}

module.exports = sequelize;
