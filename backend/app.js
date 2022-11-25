const express= require('express')
const app=express();
require('dotenv').config();

const mongoose=require('mongoose')

var cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://sravangvm:gorugantu27@cluster0.46iapnv.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connection OK!');
})
.catch(err=>console.log(err.message));

const path=require('./models/shortestPath');
const actual_path=require('./models/actualString');
const User=require('./models/user');
app.use(express.json());

app.post('/register',async (req,res)=>{
    try {
      const { username, gmail, phone} =  JSON.parse(req.body.data);
      const isNewUser = await User.userAlreadyInUse(username);
      if (!isNewUser)
        return res.json({
          success: false,
          message: 'This username is already in use',
        });
      console.log("sucessfull registration");
      const user = await User({
        username, gmail, phone
      });
      await user.save();
      res.json({ success: true, user });
    } catch (error) {
        return res.json(`no reg`);
    }
});

app.get('/userdetails/:username',async(req,res)=>{
  const usename=req.params.username;
  User.find({username:usename},(err,result)=>{
      if(err)
      {
          res.send(err)
      }
      res.send(result)
  })
});

app.post('/path',async (req,res)=>{
  try {
    const {source, destination} =req.body;
    var ans= await path(source,destination);
    ans=actual_path(ans);
    res.json({ success: true, ans });
  } catch (error) {
      return res.json('No path');
  }
});

app.listen(8000, ()=>{
    console.log("Server running on 8000");
})