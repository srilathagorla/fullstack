import express from "express"
import users from "./user.js"

const app=express()

app.get("/",(req,res)=>{
    res.send("Server is Ready")
})

app.get("/api/users",(req,res)=>{
    res.send(users)
})
const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})