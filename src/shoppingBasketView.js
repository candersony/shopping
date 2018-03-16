import React from 'react';
import PropTypes from 'prop-types';
import ShoppingBasketTableView from './shoppingBasketTableView';

const ShoppingBasketView = ({shoppingBasket, onClickCheckout}) => {
    return (
        <div className="shopping-basket-view">
            <h1>Shopping Basket</h1>
            <ShoppingBasketTableView basketItems={shoppingBasket.basketItems}></ShoppingBasketTableView>
            <div className="align-right">
                <div>Total: {shoppingBasket.getTotalPrice()}</div>
                <button className="mobile-big-button" onClick={onClickCheckout}>Checkout</button>
            </div>
        </div>
    )
};

ShoppingBasketView.propTypes = {
    shoppingBasket: PropTypes.object,
    onClickCheckout: PropTypes.func
};

export default ShoppingBasketView;
