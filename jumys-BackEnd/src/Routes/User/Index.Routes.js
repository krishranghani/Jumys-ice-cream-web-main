const userRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const productRoutes = require('./Product.Routes');
const cartRoutes = require('./Cart.Routes');
const wishlist = require('./Wishlist.Routes');
const order = require('./Order.Routes');

userRoutes.use('/login',loginRoutes);
userRoutes.use('/product',productRoutes);
userRoutes.use('/cart',cartRoutes);
userRoutes.use('/wishlist',wishlist);
userRoutes.use('/order',order);

module.exports = userRoutes;