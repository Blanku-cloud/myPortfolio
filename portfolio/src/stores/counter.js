import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useOpenStore = defineStore("openState", {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    isOpen: true,
  }),
  actions: {
    // since we re'ly on `this`, we cannot use an arrow function
    changeStatementFalse() {
      this.isOpen = false;
    },
    changeStatementTrue() {
      this.isOpen = true;
    },
  },
});
