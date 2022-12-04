<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="h-screen bg-[url('../assets/img/myface.png')] bg-no-repeat bg-bottom bg-[length:60rem_45rem]"
  >
    <div class="grid grid-cols-[1.4fr_.2fr_1.4fr] grid-rows-1 h-full mx-32">
      <div class="flex justify-center items-center">
        <div>
          <div class="max-w-xs">
            <hr class="mb-8 h-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <h2 class="text-white text-6xl max-w-xl">
            Hi. I'm Michael, a Highschool student!
          </h2>
        </div>
      </div>
      <div></div>
      <div class="flex justify-center items-center flex-col">
        <div>
          <div><h3 class="text-white text-4xl max-w-xl">About Me</h3></div>
          <div>
            <p class="text-gray-300 max-w-sm mt-5">
              I absolutely love love food. I am always daydreaming about my next
              meal whenever I have the chance to because they are one of the
              most exciting part of the day
            </p>
            <div class="mt-5">
              <router-link to="/About-Me" class="text-white"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
