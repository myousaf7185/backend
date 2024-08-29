import { registerSeller, loginSeller } from '../../controller/seller/sellercontroller.js';

import express from 'express';

const sellerRouter= express.Router();

sellerRouter.post('/sellerregister', registerSeller);
sellerRouter.post('/sellerlogin', loginSeller);

export default sellerRouter;
