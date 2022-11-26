<script>
import { RouterLink } from "vue-router";
export default {
  props: ["title", "items"],
};
</script>

<template>
  <div class="menu-item">
    <div class="myth-container">
      <RouterLink to="/about" class="modern-myth"
        ><h4>{{ title }}</h4></RouterLink
      >
    </div>
    <svg viewBox="0 0 1030 638" class="arrow">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <div v-for="(item, i) in items" :key="i" class="sub-menu">
      <div class="menu-item">
        <RouterLink :to="item.link"
          ><h4>{{ item.title }}</h4></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style>
.menu-item {
  display: flex;
}
.arrow {
  width: 1rem;
  margin-left: 0.5rem;
}
a:link {
  text-decoration: none;
}
.modern-myth,
.sub-menu a {
  color: var(--dark-white);
  font-weight: initial;
  cursor: pointer;
}
nav .menu-item .modern-myth a {
  color: red;
}

nav .menu-item .sub-menu {
  position: absolute;
  background-color: var(--third);
  top: calc(100% + 1.8rem);
  left: 50%;
  transform: translateX(-50);
  width: max-content;
  border-radius: 0 0 1.6rem 1.6rem;
}
</style>
