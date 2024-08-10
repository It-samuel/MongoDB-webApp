const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res) =>{
    res.render('login')
})

pp.get('/signup',(req,res) =>{
    res.render('signup')
})


app.listen(5500, ()=> {
    console.log('Server is running on port 5500')
})