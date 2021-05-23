const mongoose=require("mongoose");
const validator=require("validator");

const studentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    owner_ref:{
        type:String,
        required:true
    },
    settings:{
        description:{
            type:String,
            
            defaut:"Descriptive text"
        },
        mode:{
            type:String,
            default:"single",
            required:true
        },
        scheduled:{
            type:Boolean,
            default:false,
            required:true
        },
        duration:{
            type:Number,
            default:30,
            min:20,
            max:60,
            required:true
        },
        participants:{
            type:Number,
            default:5,
            min:2,
            max:10,
            required:true
        }
        
    }




        
})
//creating a new collection with name student and it will we students in collection

const Student = new mongoose.model("Student",studentschema);

module.exports=Student;