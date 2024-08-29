
// import registerbuyer from "../controller/buyercontroller.js";
// import loginBuyer from "../controller/buyercontroller.js";
import {registerbuyer, loginBuyer} from "../controller/buyercontroller.js"
import express from 'express';
import { loginSeller, registerSeller } from "../controller/seller/sellercontroller.js";
// import { login, register } from "../controller/controller.js";

const buyerRouter= express.Router();

buyerRouter.post('/register', registerbuyer);
buyerRouter.post('/login', loginBuyer);

export default buyerRouter;
