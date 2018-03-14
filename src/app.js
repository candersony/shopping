import React, { Component } from 'react';
import ProductList from './productListView';
import ShoppingBasketHeaderView from './shoppingBasketHeaderView';

class App extends Component {
    constructor(props) {
        super(props);
        this.shoppingBasket = props.shoppingBasket;
        this.state = {
            shoppingBasketItemsCount: 0
        }
    }

    onClickProduct(product) {
        this.shoppingBasket.addItem(product);
        this.setState({
            shoppingBasketItemsCount: this.shoppingBasket.getItemCount()
        });
    }

    render() {
        return (
            <div className="app-container">
                <div>
                    <ShoppingBasketHeaderView itemsCount={this.state.shoppingBasketItemsCount}>
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
