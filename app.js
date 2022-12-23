const express = require('express');
const app = express();
app.use(express.json())

app.get('/tushar',(req,res) => {
   // res.send("Hello Tushar")
   res.json({
    "status":"success",
    "data":"Hello World"
   })
});
app.post('/tushar1',(req,res) => {
    res.statusCode = 500
    res.send(`POST request done ${req.body["username"]}`)
})g
app.listen(3000,() => {
    console.log('Server is listening at 3000');
})