<template>
  <div class="card">
    <h3>Наименование: {{ object.title }}</h3>
    <span id="price">Цена: {{ object.price }}</span>
    <span>Количество:</span>
    <button @click="addProduct(object.title)">+</button>
    <span>{{ count }}</span>
    <button @click="reduceCount(object.title)">-</button>
    <button @click="deleteProduct(object.title)" id="delete">Удалить из корзины</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  props: {
    object: Object,
    count: Number
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