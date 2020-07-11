<template>
<section class="section cart" id="app-cart">
	<Cart />
</section>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    Cart
  }
}
</script>