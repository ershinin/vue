<template>
  <div class="card">
    <h3>Наименование: {{ object.title }}</h3>
    <span>Цена: {{ object.price }}</span>
    <span v-if="object.count > 0">{{ object.count }}</span>
    <span v-else>Товара нет в наличии</span>
    <p>Описание: {{ object.description }}</p>
    <img :src="require(`../images/${object.image}`)" :alt="object.image"/>
    <button @click="addProduct(object.id)">Добавить в корзину</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  computed: {
    object() {
      return this.$store.state.goods.find(obj => obj.id == this.$route.params.id)
    }
  },
  methods: {
    ...mapMutations(['addProduct']),
  }
}
</script>

<style scoped>

</style>