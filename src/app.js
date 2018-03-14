import React, { Component } from 'react';
import ProductList from './productListView';
import ShoppingBasketHeaderView from './shoppingBasketHeaderView';

class App extends Component {
    constructor(props) {
        super(props);
    }

    onClickProduct(product) {
    }

    render() {
        return (
            <div className="app-container">
                <div>
                    <ShoppingBasketHeaderView itemsCount={10}>
                    </ShoppingBasketHeaderView>
                </div>
                <ProductList
                    products={this.props.products}
                    onClickProduct={this.onClickProduct.bind(this)}>
                </ProductList>
            </div>
        );
    }
}

export default App;
