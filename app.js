const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const Expense = require('./models/expense');
const { addExpense } = require('./controller/ExpenseController');

const app =express();
app.use(cors());

app.use(bodyParser.json({extended:true}));

const routers = require('./router/expenseRouter')
app.use(routers)


sequelize.sync()
.then(result=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err);
})