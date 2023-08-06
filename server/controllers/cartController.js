// import { Cart } from "../models/CartModel.js"; // Use the correct path to your cart model

import Cart from "../models/cartModel.js";

export const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        console.log("🚀 ~ file: cartController.js:8 ~ addToCart ~  req.body:", req.body)

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId });
        }

        const existingItem = cart.items.find((item) => item.productId.toString() === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        cart.updatedAt = Date.now();

        await cart.save();

        res.status(200).json({ message: 'Item added to cart', cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding item to cart' });
    }
};


//get
export const getAllCartData = async (req, res) => {
    try {
        // Get all cart data
        const carts = await Cart.find().populate('userId').populate('items.productId');

        res.status(200).json(carts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching cart data.' });
    }
};