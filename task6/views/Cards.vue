<template>
  <mini-card v-for="good in goods" :key="good.id" :object="good"/>
</template>

<script>
import {goods} from "../data.js";
import MiniCard from "../components/MiniCard";
export default {
  components: {MiniCard},
  data() {
    return {
      goods,
    }
  },

}
</script>

<style scoped>

</style>