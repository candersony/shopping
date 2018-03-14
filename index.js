import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import productService from './src/productService';

ReactDOM.render(
    <App products={productService.getProducts()} />,
    document.getElementById('root')
);
