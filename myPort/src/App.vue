<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/NavBar.vue";
</script>

<template>
  <header>
    <Nav></Nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
