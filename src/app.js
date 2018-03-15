import React, { Component } from 'react';
import ProductList from './productListView';
import ShoppingBasketHeaderView from './shoppingBasketHeaderView';
import ShoppingBasketView from './shoppingBasketView';

class App extends Component {
    constructor(props) {
        super(props);
        this.shoppingBasket = props.shoppingBasket;
        this.state = {
            shoppingBasketItemsCount: 0,
            currentView: 'products'
        }
    }

    changeView(viewName) {
        this.setState(currentState => Object.assign({}, currentState, {
            currentView: viewName
        }));
    }

    onClickProduct(product) {
        this.shoppingBasket.addItem(product);
        this.setState({
            shoppingBasketItemsCount: this.shoppingBasket.getItemCount()
        });
    }

    renderProductView() {
        return (
            <div className="app-container">
                <div onClick={() => this.changeView('shoppingBasket')}>
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

    renderShoppingBasketView()  {
        return (
            <div className="app-container">
                <a href="#" onClick={() => this.changeView('products')}>back</a>
                <ShoppingBasketView
                    shoppingBasket={this.shoppingBasket}
                    onClickCheckout={() => {}}>
                </ShoppingBasketView>
            </div>
        );
    }

    render() {
        const views = {
            'products': this.renderProductView.bind(this),
            'shoppingBasket': this.renderShoppingBasketView.bind(this),
        };

        return views[this.state.currentView]();
    }
}

export default App;
