<template>
  <div>
    <div>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQO5lGL2rZVzejAhhd7TWs7ERXfY_MgqPpq4ECUpNsmSSxrOsLeX1nr1Ax2cWOvOYpZwirx9p53FulV/embed?start=false&loop=false&delayms=3000"
        width="100%"
        height="600"
        title="Good Samaritan"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useOpenStore } from "@/stores/counter";
export default {
  setup() {
    const openStore = useOpenStore();
    onMounted(() => {
      openStore.changeStatementFalse();
    });
    return {};
  },
};
</script>

<style scoped></style>
