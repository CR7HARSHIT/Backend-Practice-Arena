const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const obj={
	name:"Harshvardhan",
	age:22,
	gender:"male",
	Available:true
}
app.get('/api',(req,res)=>{
   res.json(obj)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
