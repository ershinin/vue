<template>
  <h1>Ваша корзина</h1>
  <p>Общая стоимость товаров в корзине: {{ basketPrice }}</p>
  <mini-card-in-basket v-for="good in goodsInBasket"
                       :key="good.id"
                       :object="good"
                       :count="this.$store.getters.getProductCount(good.title)"/>
</template>

<script>
import {goods} from "../data.js";
import MiniCardInBasket from "../components/MiniCardInBasket";
export default {
  components: {MiniCardInBasket},
  data() {
    return {
      goods,
    }
  },
  computed: {
    goodsInBasket() {
      return goods.filter(obj => this.$store.state.basket.has(obj.title))
    },
    basketPrice() {
      let sum = 0;
      for (let [key, value] of this.$store.state.basket) {
        sum += goods.find(obj => obj.title === key).price * value;
      }
      return sum;
    }
  }
}
</script>

<style scoped>

</style>