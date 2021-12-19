import { createStore } from 'vuex';
import {goods} from "../data.js";

export default createStore({
  state: {
    goods,
    basket: new Map(), // храним корзину в виде {id товара: его количество}
  },
  getters: {
    productsCount(state) {
      let sum = 0;
      for (let value of state.basket.values())
        sum += value;
      return sum;
    },
    getProductCount: (state) => (id) => {
      return state.basket.get(id)
    }
  },
  mutations: {
    addProduct(state, productId) {
      if (!state.basket.has(productId)) {
        state.basket.set(productId, 1);
      } else {
        state.basket.set(productId, state.basket.get(productId) + 1);
      }
    },
    reduceCount(state, productId) {
      state.basket.set(productId, state.basket.get(productId) - 1);
    },
    deleteProduct(state, productId) {
      state.basket.delete(productId)
    }
  }
})
