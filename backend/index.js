const bodyParser = require('body-parser');
const express = require('express');

const Routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/', Routes);

app.listen(8080, (err)=>{
  if(err){
    console.log("server not started");
    return false;
  }
  console.log("server was started");
});
