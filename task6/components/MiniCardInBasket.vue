<template>
  <div class="card">
    <h3>Наименование: {{ object.title }}</h3>
    <span id="price">Цена: {{ object.price }}</span>
    <span>Количество:</span>
    <button @click="addProduct(object.id)">+</button>
    <span>{{ productCount }}</span>
    <button @click="reduceCount(object.id)" :disabled="productCount <= 1">-</button>
    <button @click="deleteProduct(object.id)" id="delete">Удалить из корзины</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  props: {
    object: Object
  },
  computed: {
    productCount() {
      return this.$store.getters.getProductCount(this.object.id)
    }
  },
  methods: {
    ...mapMutations(['addProduct', 'reduceCount', 'deleteProduct']),
  }
}
</script>

<style >
.card > #delete {
  display: block;
}
</style>