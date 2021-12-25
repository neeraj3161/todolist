const express = require('express');
const app = express();
// app.use()
const bp = require('body-parser');
app.use(bp.urlencoded({extended:true}));
const port=3000;
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.0g10x.mongodb.net/todolistDB',{useNewUrlParser:true});
// schema
const itemsSchema=new mongoose.Schema({
    name:{
        type:String
    }
});
// creating model 

const item= mongoose.model("item",itemsSchema)

// Default items
const item1= new item({
    name:"Welcome to do list"
});

const item2 = new item({
    name:"click on the + add items"
});

const item3= new item({
    name:"<-- Hit this to delete the item"
});



var items=[];
let workItems=[];
app.set('view engine','ejs');
const date=require(__dirname+'/views/date.js');
console.log(date());
app.use(express.static(__dirname+'/'));

app.get('/',(req,res)=>{
    item.find(function(err,result){
        if(err){
            console.log(err)
        }else{
            if(result.length===0){
                item.insertMany([item1,item2,item3],function(err){
                    if(err){
                        console.log(err);
                
                    }else{
                        console.log("Item inserted")
                        res.redirect('/')
                        
                    }
                })
                

            }
            else{
                result.forEach(function(name){
                    var fname=name.name;
                    })
                    res.render('index',{listitems:"Today",item:result});
            }
            
        }
        })
    })
    
    

app.get('/work',(req,res)=>{
    res.render('index',{listitems:"Work List",item:workItems})
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.post('/',(req,res)=>{
    var itemFound=req.body.newitem;
    const item1=new item({
        name:itemFound
        
    })
    item1.save();
    res.redirect('/')
    
    if(req.body.button=="Work"){
        workItems.push(item);
        res.redirect('/work')
    }else{
        items.push(item);
        res.redirect('/');
    }
})

app.post('/delete',(req,res)=>{
    var itemd=req.body.checkbox
    item.deleteOne({_id:itemd},function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
    
})



app.listen(port,function(){
    console.log("Server started at "+port);
})
