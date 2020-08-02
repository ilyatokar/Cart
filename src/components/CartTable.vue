<template>
  <div class="container">
		<h1 class="section-title">Корзина</h1>
		<div class="cart__top">
			<a href="#" class="btn cart__back-to-catalog">Вернуться к покупкам</a>
			<p class="cart__title">Список товаров, которые вы добавили в корзину</p>
			<a href="#" class="btn btn--blue cart__next-step">Оформить заказ</a>
		</div>

		<div class="cart-table" >
        <div class="cart-table-header">
            <div class="cart-table-header__item--info">Товар</div>
            <div class="cart-table-header__item--price">Цена</div>
            <div class="cart-table-header__item--quantity">Количество</div>
            <div class="cart-table-header__item--total">Сумма</div>
        </div>
        <div class="cart-table-body" v-for="item in cart.products" v-bind:key="item.productid">
            <CartItem 
              @remove="removeProductOnCart"
              @minus="minusCountProduct"
              @add="addCountProduct"
              :productid="item.productid"
              :name="item.name"
              :img="item.img"
              :count="item.count"
              :price="item.price"
              :sale="false"
            />

        </div>
    </div>

		<div class="cart__total">
			<div class="cart__coupon">
				<label for="coupon">Применить купон:</label>
				<input autocomplete="off" type="text" id="coupon" name="form[]" placeholder="Коды скидок"
					class="input cart__coupon-inp" />
			</div>
			<div class="cart__total-price total-price" @update="UpdatePrice">
				Итого: <span class="rub">{{ProductSum}}</span>‬
			</div>
		</div>
		<div class="cart__bottom">
			<a href="#" class="btn cart__back-to-catalog">Вернуться к покупкам</a>
			<a href="#" class="btn btn--blue cart__next-step">Оформить заказ</a>
		</div>
	</div>
    
</template>

<script>

import CartItem from './CartItem.vue'

export default {
  name: 'CartTable',
  data(){
    return{
      ProductSum: 0
    }
  },
  props:{
    cart: Object
  },
  components: {
    CartItem
  },
  created() {
    this.UpdatePrice()
  },
  methods:{
    removeProductOnCart(id){
        delete localStorage.cart.products[id]
        cart = localStorage.cart;
        // this.$store.commit('removeProductOnCart', this.productid)
    },
    addCountProduct(id){
      for(var i=0; i<= this.cart.products.length; i++){
        if(this.cart.products[i].productid == id){
          this.cart.products[i].count++
          this.UpdatePrice()
        }
      }
      
    },
    minusCountProduct(id){
      for(var i=0; i<= this.cart.products.length; i++){
        if(this.cart.products[i].productid == id && this.cart.products[i].count>1){
          this.cart.products[i].count--
          this.UpdatePrice()
        }
      }
    },
    UpdatePrice(){
      console.log("UpdatePrice");
      this.ProductSum = 0
      for(var i=0; i<= this.cart.products.length; i++){
        this.ProductSum = this.ProductSum + (this.cart.products[i].count * this.cart.products[i].price)
      }
    }
  }
}

</script>