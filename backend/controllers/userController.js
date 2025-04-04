import userModel from "../models/userModels"
import validator from "validator"
import bcrypt from "bcrypt"


//Route for user login
const loginUser = async (req,res)=> {

}

// Route for user register
const registerUser = async (req,res)=>{
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({message: 'Please fill all the fields'})
        }
                                                                                 //check if user already exists  
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message:"User already exists"})
        }

        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Invalid email"})
        }
        if(!validator.isStrongPassword(password)){
            return res.json({success: false, message:"Enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //create user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

    } catch (error) {
        
    }
}

//route for admin login
const adminLogin = async (req,res)=>{

}

export {loginUser, registerUser, adminLogin}