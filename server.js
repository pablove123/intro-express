// import modules

import express from 'express'
import { students } from './data/data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set("view engine","ejs")

// Mount Middleware (app.use)



// Mount routes

app.get("/", function (req, res){
res.send("<h1> Hello Friend </h1>")
})

app.get("/waffles", function(req,res){
  res.redirect("/todos")
})

app.get("/slay", function(req,res){
  res.send("<h1>I am slaying</h1>")
})


app.get("/angel", function(req, res){
  res.send("<h1>My Bub</h1>")
})

app.get("/home", function(req, res){
  res.render("home")
})

app.get("/student", function (red, res){
  res.render("students/index", {
    students
  })
})
// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})