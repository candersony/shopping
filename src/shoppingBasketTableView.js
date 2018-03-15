import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBasketTableView = ({basketItems}) => {
    return (
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
            {basketItems.map((basketItem, id) => (
                <tr key={id}>
                    <td>{basketItem.product.name}</td>
                    <td>{basketItem.product.description}</td>
                    <td>{basketItem.quantity}</td>
                    <td className="align-right">{basketItem.product.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

ShoppingBasketTableView.propTypes = {
    basketItems: PropTypes.array
};

export default ShoppingBasketTableView;
