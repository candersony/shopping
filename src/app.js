import React, { Component } from 'react';
import ProductList from './productListView';

class App extends Component {
    constructor(props) {
        super(props);
    }

    onClickProduct(product) {
    }

    render() {
        return (
            <div className="app-container">
                <ProductList
                    products={this.props.products}
                    onClickProduct={this.onClickProduct.bind(this)}>
                </ProductList>
            </div>
        );
    }
}

export default App;
