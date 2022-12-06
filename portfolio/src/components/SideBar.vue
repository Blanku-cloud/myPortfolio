<template>
  <div class="grid grid-cols-[.5fr_2fr] grid-rows-1">
    <div class="flex flex-col mt-20 border-r-4 border-gray-800">
      <div>
        <div>
          <h4>Writing Pieces</h4>
          <RouterLink to="/Modern-Mythology/Writing-Pieces/Fairytale">
            <h5 class="ml-5 my-3 w-fit hover:underline">
              - Fairytale
            </h5></RouterLink
          >
          <RouterLink
            to="/Modern-Mythology/Writing-Pieces/The-Book-of-the-Dead"
          >
            <h5 class="ml-5 my-3 w-fit hover:underline">
              - The Book of the Dead
            </h5></RouterLink
          >
        </div>
        <div>
          <h4>Projects</h4>
          <RouterLink to="/Modern-Mythology/Projects/Creation-Story" class="">
            <h5 class="ml-5 my-3 w-fit hover:underline">
              - Creation Story
            </h5></RouterLink
          >
        </div>
        <div>
          <h4>Blogs</h4>
          <RouterLink to="/Modern-Mythology/Blogs/Blog-1" class="">
            <h5 class="ml-5 my-3 w-fit hover:underline">
              - Blog #1
            </h5></RouterLink
          >
          <RouterLink to="/Modern-Mythology/Blogs/Blog-2" class="">
            <h5 class="ml-5 my-3 w-fit hover:underline">
              - Blog #2
            </h5></RouterLink
          >
        </div>
        <div>
          <h4>Reflections</h4>
          <RouterLink to="/Modern-Mythology/Reflections/Reflection-1" class="">
            <h5 class="ml-5 my-3 w-fit hover:underline">
              - Reflection #1
            </h5></RouterLink
          >
        </div>
      </div>
    </div>
    <div class="mx-20 mt-20 mb-5">
      <RouterView :key="$route.path" />
      <ModernMyth v-show="openStore.isOpen" />
    </div>
  </div>
</template>

<script>
import ModernMyth from "../components/ModernMyth.vue";
import { useOpenStore } from "@/stores/counter";

export default {
  setup() {
    const navigation = [
      { name: "Writi", link: "/About-Me", current: false },
      { name: "Modern Mythology", link: "/Modern-Mythology", current: false },
      //   { name: "Team", href: "#", current: false },
      //   { name: "Projects", href: "#", current: false },
      //   { name: "Calendar", href: "#", current: false },
    ];
    const openStore = useOpenStore();

    return {
      navigation,
      // you can return the whole store instance to use it in the template
      openStore,
    };
  },
  data() {
    return {
      menu: [
        {
          name: "Writing Pieces",
          writingPieces: [{ name: "Fairytale", isOpen: false }],
        },
        { name: "Projects", project: [{ name: "Creation Story" }] },
        { name: "Blogs", blog: [{ name: "Blog #1" }, { name: "Blog #2" }] },
        { name: "Reflections", reflection: [{ name: "Reflection #1" }] },
      ],
    };
  },
  computed: {},
  components: { ModernMyth },
};
</script>

<style scoped></style>
