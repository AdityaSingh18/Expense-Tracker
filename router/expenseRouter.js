const express = require('express')
const router = express.Router()
const expenseController = require('../controller/ExpenseController')

router.post('/addexpense',expenseController.addExpense)

router.get('/expenses',expenseController.getExpenses)

router.delete('/delete/:userID',expenseController.deleteExpense)

module.exports=router;