const Sequelize =require('sequelize')

const sequelize = require('../util/database');

const Expense = sequelize.define('Expensedetails',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    descip:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = Expense;