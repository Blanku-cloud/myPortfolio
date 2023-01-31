<template>
  <div>
    <div>
      <iframe
        src="https://drive.google.com/file/d/1pkCL2A7WO30ShdDdEl2sCfplThO-p1HJ/preview"
        width="100%"
        height="600"
        allow="autoplay"
        title="Norse Project"
      ></iframe>
    </div>
    <div class="flex justify-center mt-5">
      <iframe
        src="https://prezi.com/p/embed/m28DU6A0AZJsJ3eFVmg2/"
        id="iframe_container"
        title="Norse Project Presentation"
        webkitallowfullscreen=""
        mozallowfullscreen=""
        allowfullscreen=""
        allow="autoplay; fullscreen"
        width="100%"
        height="600"
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
