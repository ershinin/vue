import { createStore } from 'vuex';

export default createStore({
  state: {
    basket: new Map(), // храним мапу {название товара: его количество}
  },
  getters: {
    productsCount(state) {
      let sum = 0;
      for (let value of state.basket.values())
        sum += value;
      return sum;
    },
    getProductCount: (state) => (title) => {
      return state.basket.get(title)
    }
  },
  mutations: {
    addProduct(state, productTitle) {
      if (!state.basket.has(productTitle)) {
        state.basket.set(productTitle, 1);
      } else {
        state.basket.set(productTitle, state.basket.get(productTitle) + 1);
      }
    },
    reduceCount(state, productTitle) {
      if (state.basket.get(productTitle) > 1) {
        state.basket.set(productTitle, state.basket.get(productTitle) - 1);
      }
    },
    deleteProduct(state, productTitle) {
      state.basket.delete(productTitle)
    }
  },
  actions: {
  },
  modules: {
  }
})
