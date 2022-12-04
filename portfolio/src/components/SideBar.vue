<template>
  <div class="grid grid-cols-[.5fr_2fr] grid-rows-1">
    <div class="flex flex-col justify-center mt-20">
      <h2 class="px-2">Hello</h2>
      <h2 class="px-2">Hello</h2>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      menu: [
        { name: "Writing Pieces" },
        { name: "Projects", project: [{ name: "Creation Story" }] },
        { name: "Blogs", blog: [{ name: "Blog #1" }, { name: "Blog #2" }] },
        { name: "Reflections", reflection: [{ name: "Reflection #1" }] },
      ],
    };
  },
};
</script>

<style scoped></style>
