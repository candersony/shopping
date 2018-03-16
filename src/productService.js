const products = [
    {id: 1, name: 'Apples', description: 'Fruit', stock: 5, price: 2.5},
    {id: 2, name: 'Bread', description: 'Loaf', stock: 10, price: 1.35},
    {id: 3, name: 'Oranges', description: 'Fruit', stock: 10, price: 2.99},
    {id: 4, name: 'Milk', description: 'Milk', stock: 3, price: 2.07},
    {id: 5, name: 'Chocolate', description: 'Bars', stock: 20, price: 1.79},
    {id: 6, name: 'Special Chocolate', description: 'dark orange', stock: 0, price: 2.65}
];

function getProducts() {
    return products.map(product => Object.assign({}, product));
}

export default {
    getProducts
};
