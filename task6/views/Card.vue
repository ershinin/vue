<template>
  <div class="card">
    <h3>Наименование: {{ object.title }}</h3>
    <span>Цена: {{ object.price }}</span>
    <span v-if="object.count > 0">{{ object.count }}</span>
    <span v-else>Товара нет в наличии</span>
    <p>Описание: {{ object.description }}</p>
    <img :src="'../images/' + object.image" :alt="'../images/' + object.image"/>
    <button @click="addProduct(object.title)">Добавить в корзину</button>
  </div>
</template>

<script>
import {goods} from "../data.js";
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      object: goods.find(obj => obj.id == this.$route.params.id)
    }
  },
  methods: {
    ...mapMutations(['addProduct']),
  }
}
</script>

<style scoped>

</style>