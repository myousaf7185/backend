
import Buyer from '../model/buyermodel.js';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
 export const registerbuyer = async (req, res) => {
    try {
        const { name, address, email, password } = req.body;
        const newBuyer = new Buyer({ name, address, email, password });
        await newBuyer.save();
        return res.status(200).json(newBuyer);
    } catch (error) {
        return res.status(500).json(error);
    }
}



export const loginBuyer = async (req,res)=>{
    try {
        const {email, password}= req.body;
        const user = await Buyer.findOne({email});
        if(!user){
            return res.status(400).json("invalid Email")
        }
        if(user.password !==password){
            return res.status(400).json("invalid Password")
            }
      // Create a JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.SECRET_KEY,
            { expiresIn: '1m' }
        );
        return res.status(200).json({ token });
    function login1(token){
        if(!token) return null;
        try {
            return jwt.verify(token, SECRET_KEY);
        } catch (error) {
            return nullS;
        }
    }

            // return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
}
