<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="relative mb-12">
    <h1 class="text-center text-xl sm:text-3xl lg:text-4xl">
      <router-link :to="{ name: 'NewsPostCheckerHome' }">
        News Posts
        <span class="bg-main-color-blue px-3 py-2 text-white">Checker</span>
      </router-link>
    </h1>

    <nav
      class="fixed -right-full top-0 z-10 size-full bg-gray-50 opacity-95 duration-300 lg:absolute lg:right-0 lg:top-1/2 lg:size-auto lg:-translate-y-1/2 lg:bg-transparent"
      :class="{ 'right-0': isMenuOpen }"
    >
      <ul
        class="mx-auto mt-36 flex max-w-64 flex-col items-center gap-8 text-2xl md:max-w-96 lg:mt-0 lg:flex-row lg:text-base"
      >
        <li
          class="w-full border-b border-gray-700 py-1.5 lg:border-none"
          @click="toggleMenu"
        >
          <router-link :to="{ name: 'Home' }" class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 lg:size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </router-link>
        </li>

        <li class="w-full border-b border-gray-700 py-1.5 lg:border-none">
          <router-link
            :to="{ name: 'Student' }"
            class="flex items-center gap-1"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 lg:size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            Student
          </router-link>
        </li>
      </ul>
    </nav>

    <button
      type="button"
      class="absolute right-0 top-1/2 z-10 -translate-y-1/2 space-y-2 lg:hidden"
      @click="toggleMenu"
    >
      <div
        class="h-0.5 w-8 bg-gray-700 duration-300"
        :class="{ '-rotate-45': isMenuOpen, 'translate-y-2.5': isMenuOpen }"
      ></div>
      <div
        class="h-0.5 w-8 bg-gray-700 duration-300"
        :class="{ 'opacity-0': isMenuOpen }"
      ></div>
      <div
        class="h-0.5 w-8 bg-gray-700 duration-300"
        :class="{
          'rotate-45': isMenuOpen,
          '-translate-y-2.5': isMenuOpen,
        }"
      ></div>
    </button>
  </header>
</template>
