import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import productService from './src/productService';
import ShoppingBasket from './src/shoppingBasket';

const onBasketCheckedOut = basketItems => {
    basketItems.forEach(
            basketItem => productService.updateStock(basketItem.product, basketItem.quantity)
    );
    renderApp();
};

const shoppingBasket = new ShoppingBasket(onBasketCheckedOut);

function renderApp() {
    ReactDOM.render(
        <App products={productService.getProducts()} shoppingBasket={shoppingBasket}/>,
        document.getElementById('root')
    );
}

renderApp();
