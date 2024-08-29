import Connection from "./db/conn.js";
import dotenv from 'dotenv';
import express from 'express';
import buyerRouter from "./routes/buerrouter.js";
import cors from 'cors';
import sellerRouter from "./routes/seller/sellerrouter.js";

const app= express();
dotenv.config();
Connection();

app.use(cors());
const port = process.env.PORT;
app.use(express.json());
app.use('/api/buyers', buyerRouter);
app.use('/api/sellers', sellerRouter);
app.listen(port, ()=>{
    try {
        console.log("backend is running on port 8000")
    } catch (error) {
        console.log(error)
    }
})