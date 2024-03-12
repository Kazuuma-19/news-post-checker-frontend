<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="mb-12 relative">
    <h1 class="text-center text-xl sm:text-3xl lg:text-4xl">
      <router-link to="/">
        News Posts
        <span class="text-white bg-main-color-blue py-2 px-3">Checker</span>
      </router-link>
    </h1>

    <nav
      class="fixed lg:absolute top-0 lg:top-1/2 -right-full lg:right-0 lg:-translate-y-1/2 z-10 w-full lg:w-auto h-full lg:h-auto bg-gray-50 lg:bg-transparent opacity-95 duration-300"
      :class="{ 'right-0': isMenuOpen }"
    >
      <ul
        class="max-w-64 md:max-w-96 flex flex-col lg:flex-row items-center mx-auto mt-36 lg:mt-0 gap-8 text-2xl lg:text-base"
      >
        <li
          class="w-full border-b lg:border-none border-gray-700 py-1.5"
          @click="toggleMenu"
        >
          <router-link to="/" class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 lg:w-6 h-8 lg:h-6"
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

        <li class="w-full border-b lg:border-none border-gray-700 py-1.5">
          <router-link
            to="/students"
            class="flex items-center gap-1"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 lg:w-6 h-8 lg:h-6"
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
      class="lg:hidden absolute top-1/2 right-0 -translate-y-1/2 z-10 space-y-2"
      @click="toggleMenu"
    >
      <div
        class="bg-gray-700 w-8 h-0.5 duration-300"
        :class="{ '-rotate-45': isMenuOpen, 'translate-y-2.5': isMenuOpen }"
      ></div>
      <div
        class="bg-gray-700 w-8 h-0.5 duration-300"
        :class="{ 'opacity-0': isMenuOpen }"
      ></div>
      <div
        class="bg-gray-700 w-8 h-0.5 duration-300"
        :class="{
          'rotate-45': isMenuOpen,
          '-translate-y-2.5': isMenuOpen,
        }"
      ></div>
    </button>
  </header>
</template>
