const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const Expense = require('./models/expense');

const app =express();
app.use(cors());

app.use(bodyParser.json({extended:true}));

app.post('/addexpense',async(req,res,next)=>{
    console.log(req.body)
    let amount = req.body.amount;
    let descip = req.body.descip;
    let category = req.body.category;

    const data = await Expense.create({
        amount:amount,
        descip:descip,
        category:category
    })

    res.status(201).json({expenseDetails:data})
})

app.get('/expenses',async (req,res,next)=>{
    
    const data= await Expense.findAll()
    console.log(data+"this is data")
    res.status(201).json(data)
})

app.delete('/delete/:userID',async(req,res,next)=>{

    const userid = req.params.userID
    await Expense.destroy({where:{id:userid}})
    res.status(200)
})


sequelize.sync()
.then(result=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err);
})