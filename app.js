const express = require("express")
const users = require("./users.json")
const app = express()
const PORT = 3000

app.get('/',(request,response)=>{
    response.json({"mensaje":"hello world Luca VA"})
    console.log("alguien pidio info en /")
    console.log(users)
})

app.get('/users',(request,response)=>{
    response.json(users)
    console.log("alguien pidio usuarios en /users")
})



app.listen(PORT, ()=>{console.log("Escuchando n localhost:"+PORT)})

