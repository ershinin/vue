<template>
  <mini-card v-for="good in goods" :key="good.id" :object="good"/>
</template>

<script>
import MiniCard from "../components/MiniCard";
export default {
  components: {MiniCard},
  computed: {
    goods() {
      return this.$store.state.goods;
    }
  },
}
</script>

<style scoped>

</style>