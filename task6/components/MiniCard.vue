<template>
  <div class="card">
    <h3>Наименование: {{ object.title }}</h3>
    <span id="price">Цена: {{ object.price }}</span>
    <span v-if="object.count > 0">{{ object.count }}</span>
    <span v-else>Товара нет в наличии</span>
    <p>Описание: {{ object.description.substr(0, 14) }} ...</p>
    <img :src="'../images/' + object.image" :alt="'../images/' + object.image"/>
    <router-link :to="'/product/' + object.id">Подробнее</router-link>
    <button @click="addProduct(object.title)" id="add">Добавить в корзину</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  props: {
    object: Object,
  },
  methods: {
    ...mapMutations(['addProduct']),
  }
}
</script>

<style>
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