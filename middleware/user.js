
const {User}=require ("../db");

async function userMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    


    await User.find({
        username:username,
        password:password
    })

    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"user doesn't exist"
            });
        };
    });
};


module.exports=userMiddleware;
