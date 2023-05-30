const express = require('express');
const app =express();
const cors = require('cors');

app.use(cors({
    origin:"http://localhost:3000",
})
);

app.post("/upload",(req,res)=>{
    setTimeout(()=>{
        console.log('file uploaded');
        return res.status(200).json({result:true, msg:'file Uploaded'})

    },3000)
})
app.delete("/upload", (req,res)=>{
    console.log('file deleted');
        return res.status(200).json({result:true, msg:'file deleted'})
})

app.get('/',(req,res)=>{
    res.send('Hello Gayathri')
})


app.listen(8080,()=>{
    console.log("running on  8080");
})