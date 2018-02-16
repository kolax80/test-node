// const calc = require('./calc')
// const numbersToAdd = [
//     3,
//     4,
//     10,
//     2
// ]
// const result = calc.sum(numbersToAdd)
// console.log(`The result is: ${result}`)

// const _ = require('lodash')
// _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// // → { 'a': 1, 'b': 2, 'c': 3 }


// для чистого node.js
// const http = require('http')
// const port = 3000
// var a = 'test'
// const requestHandler = (request, response) => {
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// }
// const server = http.createServer(requestHandler)
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${a}` + port )
// })

// с фреймворком express вар 1
// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (request, response) => {
//     response.send('Hello from Express!')
// })
// app.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })


// с фреймворком express вар 2
// var express = require('express');
// var app = express();
// var port = 2000;
// var test = require('./calc');
// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// app.listen(port, function() {
//   console.log('Example app listening on port '+ port);
// });

// var express = require('express');
// var exphbs  = require('express-handlebars');

// var app = express();

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// app.get('/', function (req, res) {
//     res.render('home');
// });

// app.listen(2000);

var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var app = express();
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/',function (req, res) {
    res.render('home', {
        name: 'John'
    })
})
app.get('/about',function (req, res) {
    res.render('home', {
        name: 'John',
        text:'content'
    })
})

app.listen(2000);
