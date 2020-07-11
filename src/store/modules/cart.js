export default{
    state: {
        cart: JSON.parse(localStorage.getItem('cart')),
    },
    actions: {},
    mutations: {
        addCountProduct(state, id) {
            state.cart.products[id].count++
            localStorage.setItem('cart', JSON.stringify(state.cart))
            state.cart = JSON.parse(localStorage.getItem('cart'))
        },  
        removeCountProduct(state, id) {
            if(state.cart.products[id].count > 0){
                state.cart.products[id].count--
                localStorage.setItem('cart', JSON.stringify(state.cart))
                state.cart = JSON.parse(localStorage.getItem('cart'))
            }
        },
        addCart(state, id){
            state.cart.products[id] = {
                count:1
            }
        },
        removeProductOnCart(state, id){
            delete state.cart.products[id];
            localStorage.setItem('cart', JSON.stringify(state.cart))
            state.cart = JSON.parse(localStorage.getItem('cart'))        
        },
        
        updateCart(state, cart){

        }
    },
    getters: {
        getCountProducts: state => id => {
            return state.cart.products[id].count
        },
        getCart(state){
            return state.cart
        },
        addCountProduct(){
            
        },        
        getInfoProducts(state){
            return state.cart
        }
    },
}