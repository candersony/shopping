import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import productService from './src/productService';
import ShoppingBasket from './src/shoppingBasket';

const shoppingBasket = new ShoppingBasket();

ReactDOM.render(
    <App products={productService.getProducts()} shoppingBasket={shoppingBasket}/>,
    document.getElementById('root')
);
