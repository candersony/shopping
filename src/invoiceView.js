import React from 'react';
import PropTypes from 'prop-types';
import ShoppingBasketTableView from './shoppingBasketTableView';

const InvoiceView = ({shoppingBasket, onClickFinish}) => {
    return (
        <div>
            <h1>Invoice</h1>
            <ShoppingBasketTableView basketItems={shoppingBasket.basketItems}></ShoppingBasketTableView>
            <div className="align-right">
                <button onClick={onClickFinish}>Finish</button>
            </div>
        </div>
    )
};

export default InvoiceView;
