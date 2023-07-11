import User from "../model/user.js";
import bcrypt from 'bcrypt';



export const updatePassword = async (req,res, next) => {
    const { email,password ,newPWD} = req.body;
    try{
        let checkUser = await User.findOne({ email: email});
        if(!checkUser){
            return res.status(400).json({ message:"User Not Found"});
        }
        let veryfy = bcrypt.compareSync(password, checkUser.password);
        if(!veryfy){
            return res.status(400).json({ message:"Invalid Password"});
        }
        const saltRounds = 10;
        let hashed =  bcrypt.hashSync(newPWD,saltRounds);
        let userId = checkUser.id;
        let hash = hashed.toString();
        // User.findByIdAndUpdate(userId, { password: newPWD }, { new: true } )
        User.findByIdAndUpdate(userId, { password: hash}).then(
            () => { return res.status(200).json({message:"success"})}
        )
    }catch(e){
        console.log(e);
    }
}

export const log = async (req,res) => {
    const {email,password} = req.body;
    let checkUserEmail
    try{
        checkUserEmail = await User.findOne({email:email});
        
    }catch(err){
        console.log(err);
    }
    if(!checkUserEmail){
        return res.status(400).json({checkUserEmail})
    }
    const pwdcheck = bcrypt.compareSync(password, checkUserEmail.password);
    if(!pwdcheck){
        return res.status(400).json({message: "enter correct password"});
    }
    let uname = checkUserEmail.name.toUpperCase()
    return res.status(200).json(uname);
}

export const signup = async(req,res,next) => {
    const {name,email,phno,password} = req.body;

    let checkUserEmail;
    let checkUserPhone;
    try{
        checkUserEmail = await User.findOne({email:email});
        checkUserPhone = await User.findOne({phno:phno});
    }catch(e){
        console.log(e);
    }
    if(checkUserEmail){
        return res.status(400).json({message:'email already exists'});
    }
    else if(checkUserPhone){
        return res.status(400).json({message:'Phone number already exists'});
    }
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    const user = new User({
        name,
        email,
        phno,
        password: hash,
    })
    try{
        await user.save();
      } catch(err){
         return console.log(err);
      }
      return res.status(201).json({user})
}   

