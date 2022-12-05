<template>
  <div>
    <div>
      <h3 class="font-bold underline mb-5 text-center">
        Atomic Habits and Growth
      </h3>
    </div>
    <div class="my-5">
      <p>
        Since middle school I have always waited until the last minute to do my
        homework and projects. I would always get home and waste my time playing
        games or watching videos and then doing homework late at night. Having
        to do homework so late at night has also caused me to have a lack of
        sleep. This year I would like to stop procrastinating and get more
        sleep.
      </p>
    </div>
    <div class="my-5">
      <p>
        I crafted these standards based on my previous experiences and my
        worries about the college application process. I have come to realize
        that applying to college is going to be a longer and harder process than
        I thought it would be. Since I already get home late due to track
        practice, I can’t afford to be procrastinating like I have in the past.
        I have also found that some of my classes this year have been hard. I
        can’t afford to be dozing off and missing important information.
      </p>
    </div>
    <div class="my-5">
      <p>
        I have shown resilience by choosing to limit the amount of timeI spend
        on the activities I enjoy. I try to limit the time I spend each night
        playing video games and watching videos. I also have been trying to
        force myself to work on the college essay even when I don't want to do
        it.
      </p>
    </div>
    <div class="my-5">
      <p>
        I can assess myself by paying attention to how tired I feel everyday and
        watching my progress in my college application process. If I am feeling
        less tired than usual then I am doing well and if I still feel tired
        then I am failing to follow my standards. If I am still feeling tired I
        can set a time for myself and try to get everything done by then and go
        to sleep. In terms of my college essay, if I am not seeing much change
        then I am failing. To fix that I could spend more time on weekends
        working on the essay. I assess myself every few days.
      </p>
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
