const express = require('express')
const app = express()

const dbConnection = require('./src/utils/mysql.connector')

const post = require('./src/post/post.model')

app.get('/api/v1',function(req,res){
    return res.json(req)
}) 

app.get('/api/v1/posts' , function(req,res){
return res.json([post])
})

app.listen(3000,function(){
    console.log('mentalHealthCounselling listening on port 3000')

    dbConnection.connect(function(err){
        if (err) throw err


        console.log("connected to mysql")
    })
})
