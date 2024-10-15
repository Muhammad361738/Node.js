const User = require("../schema/userschema");

// Controller for create user 

const createUser = async (req,res)=>{
    try {
        const user =new User({
            name : req.body.name,
            email : req.body.email,
            password: req.body.password,
            age : req.body.age,
            image : req.file.filename,
            role :req.body.role
        })
        const userData = await User.findOne({email:req.body.email});

        if(userData){
            res.status(200).sen({success : false , message :"User already exists"})
        }else{
            const newUser = await user.save();
            res.status(200).sed({success:true , message :"User created successfully",data : newUser})
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports={
    createUser
}