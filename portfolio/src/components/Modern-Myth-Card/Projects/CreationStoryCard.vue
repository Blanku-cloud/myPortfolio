<template>
  <div>
    <div>
      <iframe
        src="https://drive.google.com/file/d/1hURyt7RuhnFoN1B3bu7HaPPvXMxWwlZT/preview"
        width="100%"
        height="600"
        allow="autoplay"
        title="Creation Video"
      ></iframe>
    </div>
    <div class="flex justify-center my-5">
      <img
        src="../../../assets/img/creationmythposter.jpg"
        alt="mymythposet"
        class="object-cover h-[25rem]"
      />
    </div>
    <div class="flex justify-center">
      <iframe
        title="Our Group Slide"
        src="https://docs.google.com/presentation/d/e/2PACX-1vR32sehWoZ1kB_s0n9ZxRCM7yPbGGa8CdGBYZ_5jkIt-f9mrXuK8INV5Fz_WAneyd-kkcn8OEh3fQ-w/embed?start=false&loop=false&delayms=3000"
        width="100%"
        height="600"
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

<style lang="scss" scoped></style>
