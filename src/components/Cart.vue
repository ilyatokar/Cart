<template >
	<div v-if="cart !== ''">
		<CartTable :cart="cart"/>
	</div>
	<div v-else>
		<CartEmpty />
	</div>
</template>


<script>

import CartTable from './CartTable.vue'
import CartEmpty from './CartEmpty.vue'

export default {
	name: 'Cart',
  	data() {
		return {
			cart: {
				products:[
					{
						count: 10,
						productid: 391,
						name: "Название книги",
						img: "http://5.189.224.234/upload/iblock/32a/32abf0c6d443250631fbd0393b0107c2.jpg",
						price: 200,
						sale: false
					},
					{
						count: 10,
						productid: 392,
						name: "Название книги 2",
						img: "http://5.189.224.234/upload/iblock/32a/32abf0c6d443250631fbd0393b0107c2.jpg",
						price: 400,
						sale: true
					}
				]
			},
		}
	},
  	components: {
		CartTable,
		CartEmpty
  	},
	mounted(){
		localStorage.cart = this.cart;
		
	},
	computed:{
		totalPrice(){
			
		}
	},
}
// нужна функция для подсчета общей стоимости товара
</script>