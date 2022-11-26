<script>
import { RouterLink } from "vue-router";
import DropMenu from "./DropMenu.vue";
export default {
  components: {
    DropMenu,
  },
  data() {
    return {
      mythContent: [
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
  <nav class="dropDownMenuWrapper">
    <RouterLink to="/" class="logo page"><h2>Michael Chen</h2></RouterLink>

    <DropMenu title="Modern Mythology" :items="mythContent" />
    <!-- <div class="dropwapper">
      <RouterLink to="/about" class="page mylink writing_pieces"
        ><h4>Writing Pieces</h4></RouterLink
      >
      <RouterLink to="/wlvnlks" class="page mylink project"
        ><h4>Projects</h4></RouterLink
      >
      <RouterLink to="/about" class="page mylink blog_posts"
        ><h4>Blog Posts</h4></RouterLink
      >
      <RouterLink to="/about" class="page mylink classwork_activites"
        ><h4>Classwork Activites</h4></RouterLink
      >
      <RouterLink to="/about" class="page mylink reflection"
        ><h4>Reflection</h4></RouterLink
      >
    </div> -->
  </nav>
</template>

<style>
a:link {
  text-decoration: none;
}
.logo {
  padding: 0.5rem;
}
.page {
  color: var(--dark-white);
  cursor: pointer;
}
.dropDownMenuWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 1.5rem;
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
</style>
