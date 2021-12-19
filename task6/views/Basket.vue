<template>
  <h1>Ваша корзина</h1>
  <p>Общая стоимость товаров в корзине: {{ basketPrice }}</p>
  <mini-card-in-basket v-for="good in goodsInBasket"
                       :key="good.id"
                       :object="good"/>
</template>

<script>
import MiniCardInBasket from "../components/MiniCardInBasket";
export default {
  components: {MiniCardInBasket},
  computed: {
    goodsInBasket() {
      return this.$store.state.goods.filter(
          obj => this.$store.state.basket.has(obj.id)
      )
    },
    basketPrice() {
      let sum = 0;
      for (let [key, value] of this.$store.state.basket) {
        sum += this.$store.state.goods
            .find(obj => obj.id === key)
            .price * value;
      }
      return sum;
    }
  }
}
</script>

<style scoped>

</style>