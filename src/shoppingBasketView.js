import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBasketView = ({shoppingBasket, onClickCheckout}) => {
    return (
        <div className="shopping-basket-view align-right">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th className="align-right">Price</th>
                    </tr>
                </thead>
                <tbody>
            {shoppingBasket.basketItems.map((basketItem, id) => (
                <tr key={id}>
                    <td>{basketItem.product.name}</td>
                    <td>{basketItem.product.description}</td>
                    <td>{basketItem.quantity}</td>
                    <td className="align-right">{basketItem.product.price}</td>
                </tr>
            ))}
                </tbody>
            </table>
            <div>Total: {shoppingBasket.getTotalPrice()}</div>
            <button onClick={onClickCheckout}>Checkout</button>
        </div>
    )
};

ShoppingBasketView.propTypes = {
    shoppingBasket: PropTypes.object,
    onClickCheckout: PropTypes.func
};

export default ShoppingBasketView;
