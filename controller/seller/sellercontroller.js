


import Seller from "../../model/seller/sellermodel.js";
 export const registerSeller = async (req, res) => {
    try {
        const { name, address, email, password } = req.body;
        const newSeller = new Seller({ name, address, email, password });
        await newSeller.save();
        return res.status(200).json(newSeller);
    } catch (error) {
        return res.status(500).json(error);
    }
}


export const loginSeller = async (req,res)=>{
    try {
        const {email, password}= req.body;
        const user = await Seller.findOne({email});
        if(!user){
            return res.status(400).json("invalid Email")
        }
        if(user.password !==password){
            return res.status(400).json("invalid Password")
            }
            return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
}
