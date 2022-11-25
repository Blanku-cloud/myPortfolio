<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<template>
  <nav class="wrapper">
    <section class="dropDownMenuWrapper">
      <button class="dropDownMenuButton"></button>

      <div class="iconWrapper">
        <div class="bar1" />
        <div class="bar2" />
        <div class="bar3" />
      </div>

      <section class="dropdownMenu">
        <div class="menuArrow" />
        <slot />
      </section>
    </section>

    <RouterLink to="/" class="logo page"><h2>Michael Chen</h2></RouterLink>
    <div class="dropdown">
      <RouterLink to="/about" class="page dropdown_button"
        ><h3>Modern Mythology</h3></RouterLink
      >
      <div class="dropdown_menu">
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
      </div>
    </div>
  </nav>
</template>

<style scoped>
a:link {
  text-decoration: none;
}
.logo {
  padding: 0.5rem;
}
.wrapper {
  margin-top: 1.5rem;
  margin-left: 5rem;
  margin-right: 5rem;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
.page {
  color: var(--dark-white);
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 10;
}
.mylink:hover {
  font-size: 1000rem;
}
.dropdown_button {
  display: inline-block;
  padding: 0.5rem;
  cursor: pointer;
}
.logo:hover,
.dropdown_button:hover {
  background-color: var(--secondary);
  border-radius: 1rem;
}
.dropdown_menu {
  display: none;
  min-width: 200px;
  background-color: var(--third);
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
}
.dropdown:hover .dropdown_menu {
  display: block;
  padding: 1rem;
  border-radius: 1rem;
}
.dropdown_menu a {
  margin-top: 0.5rem;
}
.dropdown_menu a:hover {
  color: var(--secondary);
}
</style>
