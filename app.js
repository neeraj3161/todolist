const express = require('express');
const app = express();
// app.use()
const bp = require('body-parser');

app.use(bp.urlencoded({extended:true}));
const port=3000;
var items=[];
let workItems=[];
app.set('view engine','ejs');
const date=require(__dirname+'/views/date.js');
console.log(date());
app.use(express.static(__dirname+'/'));

app.get('/',(req,res)=>{
    
    res.render('index',{listitems:"New",item:items});
})

app.get('/work',(req,res)=>{
    res.render('index',{listitems:"Work List",item:workItems})
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.post('/',(req,res)=>{
    var item=req.body.newitem;
    console.log(req.body.button);
    if(req.body.button=="Work"){
        workItems.push(item);
        res.redirect('/work')
    }else{
        items.push(item);
        res.redirect('/');
    }
})



app.listen(port,function(){
    console.log("Server started at "+port);
})