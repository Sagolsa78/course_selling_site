
const {Admin}=require ("../db");

const apple=async function adminMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
  

    await Admin.find({
        username:username,
        password:password
        
    })
   

    .then(function(value){
        console.log("function value",typeof value,value);
        console.log(username,password)
         if(value){
            next();

           
        }else{
            res.status(403).json({
                msg:"admin doesn't exist"
            });
        };
    });
};


module.exports=apple;






