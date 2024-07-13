const express= require("express");
const apple=require("../middleware/Admin");

const router=express.Router();
const {Admin}=require ("../db");
const {Course}=require("../db")



router.post("/signup",async function(req,res){
    try{
        const { username, password } = req.body;
        
        //   await Admin.create({
        //         username:username,
        //         password:password, 
        //     });
  
    
        //  Admin.save();
        const newAdmin = new Admin({
            username: username,
            password: password
        });
        
        // Save the new admin to the database
        await newAdmin.save();

    
        res.json({
        
            msg:"Admin created successfully"
        });
    
    }catch{
        res.json({
            msg:"There was an error in while saving data"

        })
    }
});

router.post("/courses",apple,async (req,res)=>{
   
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink

     const newCourse= await Course.create({
        title,
        description,
        imageLink,
        price,
        

    })
    console.log("createone type",typeof CreateOne);

    console.log(newCourse)
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })

})
router.get("/courses",apple,async (req,res)=>{
    const response=await Course.find({})
    res.json({
        course:response
    })
    
        

})
 

module.exports=router;



