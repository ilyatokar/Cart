<template>
  <div class="container">
		<h1 class="section-title">Корзина</h1>
		<div class="cart__top">
			<a href="#" class="btn cart__back-to-catalog">Вернуться к покупкам</a>
			<p class="cart__title">Список товаров, которые вы добавили в корзину</p>
			<a href="#" class="btn btn--blue cart__next-step">Оформить заказ</a>
		</div>

		<div class="cart-table">
        <div class="cart-table-header">
            <div class="cart-table-header__item--info">Товар</div>
            <div class="cart-table-header__item--price">Цена</div>
            <div class="cart-table-header__item--quantity">Количество</div>
            <div class="cart-table-header__item--total">Сумма</div>
        </div>
        <div class="cart-table-body" v-for="item in cart.products" v-bind:key="item">
            <CartItem 
              :productid="item"
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
			<div class="cart__total-price total-price">
				Итого: <span class="rub">120000</span>‬
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
      newCart: null
    }
  },
  mounted(){
    console.log(this.cart.products)
  },
  props:{
    cart: Object
  },
  components: {
    CartItem
  },
  methods:{
    // нужено создать новый масив карзины со всеми данными о товаре и по нему выводить данные
  }
}

</script>