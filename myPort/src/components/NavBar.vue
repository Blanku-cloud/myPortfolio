<script>
import { RouterLink } from "vue-router";
import DropMenu from "./DropMenu.vue";
export default {
  components: {
    DropMenu,
  },
  data() {
    return {
      services: [
        { title: "Writing Pieces", link: "/writing-pieces" },
        { title: "Project", link: "/project" },
        { title: "Blog Posts", link: "/blog-posts" },
        { title: "Classwork Activites", link: "/classwork-activites" },
        { title: "Reflections", link: "/reflection" },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <div class="menu-item"><a href="#">Home</a></div>
    <div class="menu-item"><a href="#">About</a></div>
    <DropMenu title="Services" :items="services" />
    <div class="menu-item"><a href="#">Contact</a></div>
  </nav>
</template>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
