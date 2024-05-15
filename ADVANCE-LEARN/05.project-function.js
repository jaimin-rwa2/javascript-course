// video : 1363

const user = {
    name: 'naruto',
    active: true,
    cart: [],
    purchases: []
}

let userHistory = []

const compose = (fun1, fun2) => (...args) => fun1(fun2(...args));

function purchaseItem(...funcs) {
    return funcs.reduce(compose)
}

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
}

function applyTexToItems() {
    
}

function buyItem() {
    
}

function emptyCart() {
    
}  

purchaseItem(
    // emptyCart,
    // buyItem,
    applyTexToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

console.log(user);