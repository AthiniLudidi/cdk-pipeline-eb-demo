var express = require('express')
var app = express()

var fs = require('fs')
var port = 8080

app.get('/', (req, res)=> {
    html=fs.readFileSync('index.html')
    res.writeHead(200)
    res.write(html)
    res.end()
})

app.get('/test', (req, res)=>{
    res.send('the REST endpoint test run!');
})

app.listen(port, ()=> {
    console.log('Server running at http://127.0.0.1:', port);
})