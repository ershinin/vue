<template>
  <div id="basket">
    <span>Товаров в корзине: {{productsCount}}</span>
    <router-link to="/basket">Перейти в корзину</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  components: {},
  computed: {
    productsCount() {
      return this.$store.getters.productsCount
    }
  }
}
</script>

<style>
 #basket span {
   display: block;
 }
</style>
