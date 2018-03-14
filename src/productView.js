import React from 'react';
import PropTypes from 'prop-types';

const ProductView = ({product, onClick}) => (
    <div className="product-card">
        <div className="product-image">
            <img src="assets/product-placeholder.jpg" />
        </div>
        <div className="product-info">
            <h5>{product.name}</h5>
            <sub>{product.description}</sub>
            <div className="product-info-id">Product ID: {product.id}</div>
            <div className="product-info-stock">Stock: {product.stock}</div>
        </div>
        <button onClick={onClick}>Add to basket</button>
    </div>
);

ProductView.propTypes = {
    product: PropTypes.object,
    onClick: PropTypes.func
};

export default ProductView;
