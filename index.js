const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const Event = require('./models/event');
const { markAsUntransferable } = require('worker_threads');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/eventSet');
app.use(function middle(req,res,next){
    res.locals.display = "";
    next();
})

app.get('/',(req,res)=>{
    res.render('display');
})
app.get('/events',(req,res)=>{
    res.render('events');
})
app.get('/showEvents',(req,res)=>{
    res.render('showEvents');
})
app.get('/findUser',async(req,res)=>{
    res.send(await User.find({}));
})
app.get('/findEvents',async(req,res)=>{
    res.send(await Event.find({}));
})




app.post('/showEventnow',async(req,res)=>{
    const {id} = req.body;
    try{
    const user = await User.find({_id:new mongoose.Types.ObjectId(req.body.id)});

        const eventreq = await Event.find({user_Id:req.body.id});
        if(eventreq.length){
            res.render('allevent',{eventreq:eventreq});
        }else{
            res.render('errorpage',{show:'no events added'})
        }
    }catch(err){
        res.render('errorpage',{show:"user Id not present"});
    }
})
app.post('/addUser',(req,res)=>{
  const { username, email, gender} = req.body;
    const user = new User({
        username:username,
        email:email,
        gender:gender,
    });
   user.save().then(()=>{
        res.redirect('/events');
    }).catch((err)=>{
        const show = "Email already present";
        res.render('errorpage',{show:show});
    });
})

app.post('/addEvents',async(req,res)=>{

    try{
       let user = await User.find({_id:new mongoose.Types.ObjectId(req.body.id)})

    
       const {id, eventName, occurence, startDate, endDate} = req.body;
        let val;
        if(endDate[0] && endDate[1]){
            return res.render('errorpage',{show:'Select either ongoing or any end date not bothfor the end date'});
        }
        if(endDate[0])val = endDate[0];
        if(endDate[1])val = endDate[1];
        if(val===undefined){
            const show = "end date not defined";
            return res.render('errorpage',{show:show});
        }
     
        const addevent = new Event({
            user_Id: id,
            eventName:eventName,
            occurence:occurence,
            startDate:startDate,
            endDate:val
        })
        await addevent.save();
       res.redirect('/showEvents');
    }catch(err){
        console.log(err.message);
        const show = "user with this ID is not present";
        res.render('errorpage',{show:show});
    }
    
})




app.listen(3001);