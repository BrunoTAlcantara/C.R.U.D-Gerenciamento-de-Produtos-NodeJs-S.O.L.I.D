import express from 'express';

const app = express();

app.get("/",(req,res)=>{
  return res.json({messag: "Hello World"})
});

app.listen(3333);
