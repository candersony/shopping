import React, { Component } from 'react';
import ProductList from './productListView';
import ShoppingBasketHeaderView from './shoppingBasketHeaderView';
import ShoppingBasketView from './shoppingBasketView';
import InvoiceView from './invoiceView';

class App extends Component {
    constructor(props) {
        super(props);
        this.shoppingBasket = props.shoppingBasket;
        this.state = {
            shoppingBasketItemsCount: 0,
            currentView: 'products'
        }
    }

    updateState(newState) {
        this.setState(Object.assign({
            shoppingBasketItemsCount: this.shoppingBasket.getItemCount()
        }, newState));
    }

    changeView(viewName) {
        this.updateState({
            currentView: viewName
        });
    }

    onClickProduct(product) {
        this.shoppingBasket.addItem(product);
        this.updateState();
    }

    onCheckout() {
        const shoppingBasket = this.props.shoppingBasket;

        shoppingBasket.checkout();
        this.changeView('invoice');
    }

    onFinish() {
        const shoppingBasket = this.props.shoppingBasket;

        shoppingBasket.clear();
        this.changeView('products');
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

    renderShoppingBasketView() {
        return (
            <div className="app-container">
                <a href="#" onClick={() => this.changeView('products')}>back</a>
                <ShoppingBasketView
                    shoppingBasket={this.shoppingBasket}
                    onClickCheckout={() => this.onCheckout()}>
                </ShoppingBasketView>
            </div>
        );
    }

    renderInvoiceView() {
        return (
            <div className="app-container">
                <InvoiceView shoppingBasket={this.shoppingBasket} onClickFinish={() => this.onFinish()}></InvoiceView>
            </div>
        );
    }

    render() {
        const views = {
            'products': this.renderProductView.bind(this),
            'shoppingBasket': this.renderShoppingBasketView.bind(this),
            'invoice': this.renderInvoiceView.bind(this)
        };

        return views[this.state.currentView]();
    }
}

export default App;
