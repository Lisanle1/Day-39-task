const express=require("express");
const router=require('./router/router');
const dotenv=required('dotenv')
const app=express();
const PORT=process.env.PORT || 3001;

dotenv.config();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Please use endpoints: /file/create- to create &&  /file/list- to lists");
});

app.use('/file',router); 


app.listen(PORT,()=>{
    console.log(`App is running on the port: ${PORT}`);
})