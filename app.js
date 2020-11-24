var http=require('http')
var calc=require('./calc.js')
var ejs = require('ejs');
var fs=require('fs');       //it will bring the file system module
var bodyParser = require('body-parser')

const express=require('express');

const app=express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');//express will know from here that we want to use ejs

app.use('/assets',express.static('stuff'));
//app.use(express.static(__dirname + '/assets'));
// app.use('/assets',function(req,res,next){
    
//     console.log(req,url);
//     next();
// });
// app.get('/',function(req,res){  
//     res.send('hello')           //response send by server
// })
app.get('/alien',function(req,res){
    res.send('hello dfggjhjk')
})
app.get('/contact',function(req,res){

    console.log(req.query);
    //res.sendFile(__dirname+'/contact.html')
    res.render('contact',{qs: req.query});
})

app.post('/contact',urlencodedParser ,function(req,res){

    console.log(req.body);
    //res.sendFile(__dirname+'/contact.html')
    res.render('contact-success',{data: req.body});
})
app.get('/',function(req,res){
    //res.sendFile(__dirname+'/contact.html')
    res.render('index');
})
//here we got output dynamically
app.get('/profile/:name',function(req,res){

    var data={age:67,job:'hjuuuu',hobbies:['eating','jumping']};
    res.render('profile',{person:req.params.name,data:data});//to render the view
});
app.get('/alien/:id',function(req,res)
{
    const id=req.params.id
    res.send('heyyyyy anjali '+id)
})

app.listen(9000,function(req,res){
    console.log('runninggggg')
});
// fs.readFile('calc.js','utf8',function(err,data){

//     console.log(data)
// })
// fs.writeFile('calc1.js','console.log("done")',function(err){
//     console.log("data saved")
// })

// function add(a,b)
// {
//     return a+b
// }

// result=add(4,5)
// result2=calc.sub(6,3)
// console.log("the esult="+ result)
// console.log("the esult="+ result2)

// http.createServer(function(req,res){

//     res.writeHead(200,{'Content-Trype':'text/html'})
//     res.write("welcome back===")
//     res.end()
// }).listen(8080)