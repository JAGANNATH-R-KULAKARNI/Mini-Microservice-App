const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const uuidv1=require('uuidv1');

const app=express();

app.use(bodyParser.json());
app.use(cors());

const posts={}

app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post('/posts/',(req,res)=>{

   const id=uuidv1();
   const {title,content}=req.body;

   posts[id]={
       id,
       title
   }
  
   console.log(title);
   console.log(content);

   res.status(201).send(id);
});

app.listen(port=4000,(req,res)=>{
    console.log(`Posts service is listening on port ${port}`);
})