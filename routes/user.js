const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User}=require("../db/index")
const {Course}=require("../db/index")
const mongoose=require("mongoose");



// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
   try{
    // const username=req.headers.username;
    // const password=req.headers.password;
    // console.log(username,password,typeof username,password);
    
    // // const newUser=new User({
    // //     username:username,
    // //     password:password
    // // })
    // console.log(User);


    // const newUser=User({
    //     username:username,
    //     password:password
    // })

    const { username, password } = req.body;
        
    //   await Admin.create({
    //         username:username,
    //         password:password, 
    //     });


    //  Admin.save();
    const newUser = new User({
        username: username,
        password: password
    });
    
    



    await newUser.save();
    res.json({
        message:"user created successfully"
        
    })

   }catch{
    res.json({
        msg :"there was an error while cresting new user"
        
    })
 }


});

router.get('/courses', userMiddleware,async (req, res) => {
    // Implement listing all courses logic
    const username=req.headers.username;
    const password=req.headers.password;

    const response=await Course.find({
       
    })

    res.json({
        course:response
    })
    

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.headers.username;
    const courseId=req.params.courseId;
    try{
    await User.updateOne({
        username:username
    }, {
        "$push":{purchasedCourse:courseId}
    })

    res.status(402).json({
        msg:"purchased complete"
    })
   }catch{
    res.status(404).json({
        msg:"there was an error "
    })
   }
 
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const   user=await User.findOne({
        username:req.headers.username
    });

    const course=await Course.find({
        _id:{
            "$in":user.purchasedCourse
        }
    });
    res.json({
        course:course
    })




});

module.exports = router