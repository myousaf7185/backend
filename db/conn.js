import mongoose, { mongo } from "mongoose";
 
const Connection = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("backend is connected");
    } catch (error) {
        console.log(error)
    }
}
export default Connection;