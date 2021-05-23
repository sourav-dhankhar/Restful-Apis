const express=require("express");
require("./db/conn");

const Student=require("./models/students");

const app=express();
const port=process.env.PORT||3000;

app.use(express.json());

//create a new student

app.get("/students",async (req,res)=>{
    

    try {
        const userdata=await Student.find();    
        res.send(userdata);    
    } catch (error) {
        res.send(error);
    }

    
})

app.get("/students/:id",async (req,res)=>{
    try {
        //const _id=req.params;   //req.param gives json object with whatever we have given after /students/:
        const _id=req.params.id;      //it will give directly a id in text form
        const userdata=await Student.findById(_id);
        if(!userdata)
        {
            res.status(404).send();
        }
        else
        {
            res.send(userdata);
        }
        res.send(userdata);
    } catch (e) {
        res.status(500).send(e);      //500 means internel server error   
    }
})

app.post("/students",(req,res)=>{
    // console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
   
})

app.delete("/students/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const userd=await Student.findByIdAndDelete(_id);
        if(!userd)
        {
            res.status(400).send();
        }    
        else
        {
            res.send(userd);
        }
    } catch (error) {
        res.status(500).send(error);
    }
    


})

app.listen(port,()=>{
    console.log(`coonection is at ${port}`);
})