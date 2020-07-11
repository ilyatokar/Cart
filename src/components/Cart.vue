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
			cart: "",
			virtualCart: ""
		}
	},
  	components: {
		CartTable,
		CartEmpty
  	},
	mounted(){
		var jsondata = localStorage.getItem('cart')
		console.log(jsondata)
		this.$axios
      	.post('http://192.168.1.196/apiv1/cartitemsinfo', jsondata)
		.then(response => {
			this.virtualCart = response.data
			if(this.virtualCart.products !== ""){
				this.cart = this.virtualCart
			}
		})
		
	},
	computed:{
		totalPrice(){
			
		}
	},
}
// нужна функция для подсчета общей стоимости товара
</script>