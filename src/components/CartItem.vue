<template>
    <div class="cart-table-body__item item-with-price">
        <div class="cart-item__info">
            <a href="#" class="cart-item__img ibg">
                <img :src="img" alt="" />
            </a>
            <div class="cart-item__title-wrap">
                <div class="cart-item__breadcrumbs"><a href="#">Каталог товаров</a> &gt; <a
                        href="#">Оборудование штрих-кода</a></div>
                <h4 class="cart-item__title"><a href="#">{{name}}</a></h4>
            </div>
        </div>
        <div class="cart-item__price" v-if="sale">
            <span class="rub">{{price}}</span><span>*Цена со скидкой</span>
        </div>
        <div class="cart-item__price" v-else>
            <span class="rub">{{price}}</span>
        </div>
        <div class="cart-item__quantity">
            <div class="quantity">
                <div class="quantity__btn dwn" @click="removeCountProduct">-</div>
                <input autocomplete="off" type="number" min="1" name="form[]" v-model="count" class=" quantity__input req" />
                <div class="quantity__btn up" @click="addCountProduct" >+</div>
            </div>
            <button class="cart-item__trash" @click="removeProductOnCart">
                <svg>
                    <use xlink:href="#trash"></use>
                </svg>
            </button>
        </div>
        <div class="cart-item__total">
            <span class="cart-item__note">Общая сумма данного товара</span>
            <div class="rub">{{sum}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sum: 0
        }
    },
    props: {
        productid: Number,
        count: Number,
        name: String,
        img: String,
        price: Number,
        sale: Boolean
    },
    mounted(){
        this.sum = this.count * this.price;
    },
    computed:{
        getCount(){
            return 0
        }
    },
    methods: {
        addCountProduct(){
            state.cart.products[id].count++
            localStorage.setItem('cart', JSON.stringify(state.cart))
            state.cart = JSON.parse(localStorage.getItem('cart'))
        },
        removeCountProduct(){
            if(state.cart.products[id].count > 0){
                state.cart.products[id].count--
                localStorage.setItem('cart', JSON.stringify(state.cart))
                state.cart = JSON.parse(localStorage.getItem('cart'))
            }
        },
        removeProductOnCart(){
            this.$store.commit('removeProductOnCart', this.productid)
        }
    }
}
</script>