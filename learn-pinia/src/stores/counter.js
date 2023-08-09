import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 10 };
  },
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 == 0) return "even";

      return "odd";
    },
  },
});
