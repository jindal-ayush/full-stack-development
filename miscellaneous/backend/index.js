const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const port = 8080;

app.get('/register', (req, res)=>{
    let {user, password} = req.query;
    res.send(`standard get request Welcome ${user}`);

})

app.post('/register', (req, res)=>{
     let {user, password} = req.body
    res.send(`standard post request Welcome ${user}`)
})

app.listen(port , ()=>{
    console.log(`listening to port ${port}`)
})
