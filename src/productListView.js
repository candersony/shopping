import React from 'react';
import PropTypes from 'prop-types';
import ProductView from './productView';

const ProductListView = ({products, onClickProduct}) => (
    <section className="products">
        {products.map((product, i) => (
            <ProductView key={i} product={product} onClick={e => onClickProduct(product)} ></ProductView>
        ))}
    </section>
);

ProductView.propTypes = {
    products: PropTypes.array,
    onClickProduct: PropTypes.func
};

export default ProductListView;
