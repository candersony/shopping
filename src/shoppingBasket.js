class ShoppingBasket {
    constructor() {
        this.basketItems = [];
    }

    getBasketItem(productId) {
        return this.basketItems.find(basketItem => basketItem.product.id === productId);
    }

    getBasketItems() {
        return this.basketItems.map(basketItem => Object.assign({}, basketItem));
    }

    getItemCount() {
        return this.basketItems.reduce((count, basketItem) => count + basketItem.quantity, 0);
    }

    getTotalPrice() {
        return this.basketItems.reduce(
            (total, basketItem) =>
            total + basketItem.product.price * basketItem.quantity
            , 0);
    }

    addItem(product) {
        if (product.stock <= 0) return;

        const currentBasketItem = this.getBasketItem(product.id);
        if (!currentBasketItem) {
            this.basketItems.push({
                quantity: 1,
                product
            });
        }
        else if (currentBasketItem.quantity < product.stock) {
            currentBasketItem.quantity = currentBasketItem.quantity + 1;
        }
        console.log(this.basketItems);
    }

    clear() {
        this.basketItems = [];
    }
}

export default ShoppingBasket
