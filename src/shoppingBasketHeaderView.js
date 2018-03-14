import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBasketHeaderView = ({itemsCount}) => (
    <div className="header align-right">
        <div>Items in basket: {itemsCount}</div>
        <a href="#basket">View Basket</a>
    </div>
);

ShoppingBasketHeaderView.propTypes = {
    itemsCount: PropTypes.number
};

export default ShoppingBasketHeaderView;
