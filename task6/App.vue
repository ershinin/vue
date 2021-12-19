<template>
  <div id="basket">
    <span>Товаров в корзине: {{productsCount}}</span>
    <router-link to="/">Главная</router-link>
    <router-link to="/basket">Корзина</router-link>
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
 #basket a {
   margin: 10px;
 }
 .card {
   background-color: darkgray;
   border-radius: 3px;
   margin: 10px;
   display: inline-block;
 }
 .card > img {
   width: 100px;
   object-fit: cover;
 }
 .card > a {
   display: block;
 }
 .card > #add {
   display: block;
 }
 .card > #price {
   display: block;
 }
</style>
