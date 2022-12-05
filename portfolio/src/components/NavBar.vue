<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <h1
                class="text-white text-4xl px-2 hover:bg-gray-700 hover:rounded-md"
              >
                Michael Chen
              </h1>
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <router-link
              @click="openStore.changeStatementTrue()"
              v-for="item in navigation"
              :key="item.name"
              :to="item.link"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300  hover:text-white',
                'px-3 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</router-link
            >
            <!-- <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300  hover:text-white',
                'px-3 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</a
            > -->
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import { useOpenStore } from "@/stores/counter";

const openStore = useOpenStore();
const navigation = [
  { name: "About Me", link: "/About-Me", current: false },
  { name: "Modern Mythology", link: "/Modern-Mythology", current: false },
  //   { name: "Team", href: "#", current: false },
  //   { name: "Projects", href: "#", current: false },
  //   { name: "Calendar", href: "#", current: false },
];
</script>
