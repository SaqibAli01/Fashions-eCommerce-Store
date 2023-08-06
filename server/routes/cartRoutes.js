import express from 'express';
import { addToCart, getAllCartData } from '../controllers/cartController.js';
import { verifyLoginUser } from '../middleware/auth.js';

const router = express.Router();

router.post('/api/v1/addToCart', verifyLoginUser, addToCart);
router.get('/api/v1/cart', verifyLoginUser, getAllCartData);

export default router;
