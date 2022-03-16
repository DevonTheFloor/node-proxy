const express = require('express')
const app = express();
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()

//follow the /api path for hit the target server
app.use('/api/',(req, res, next)=>{
    proxy.web(req, res, {
        target: 'http://localhost:9000'
      });
})

app.use('/', (req,res)=>{
    res.status(200).json({message: 'Hello there'})
})

module.exports = app