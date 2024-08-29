import mongoose, { mongo } from "mongoose";

const buyerSchema = new mongoose.Schema({
name: {
    type: String,
    required : true
},

address: {
    type: String,
    required : true
},
email: {
    type: String,
    required : true
},
password: {
    type: String,
    required : true
},

})

const Buyer = mongoose.model('Buyer', buyerSchema);

export default Buyer;