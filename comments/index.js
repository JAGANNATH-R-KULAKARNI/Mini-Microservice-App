const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const uuidv1=require('uuidv1');

const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments',(req,res)=>{
  res.send('comments');
});

app.post('/posts/:id/',(req,res)=>{
    res.status(201).send('comment posted successfully');
});

app.listen(port=4001,(req,res)=>{
    console.log(`Comments service is listening on port ${port}`);
})