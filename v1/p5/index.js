const express=require('express')
const app=express()
const PORT=7777

app.get('/',(req,res)=>{
   res.send('<><h1>HOME PAGE</h1> <h2>WELCOME</h2></>')  
})

app.get('/api',(req,res)=>{
	res.json({
		"one":1,
		"two":1,
		"one":1,
		"one":1,
		"fivey
		":1,
		"one":1
	})
})

app.listen(PORT,()=>{
	console.log("Server is Running on Port",PORT)
})