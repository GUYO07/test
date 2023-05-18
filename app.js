const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combind'));
app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    debug("Listening on port"+chalk.green(port));
})