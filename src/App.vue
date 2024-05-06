<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/page/Header.vue";
import Footer from "./components/page/Footer.vue";
</script>

<template>
  <div class="container mx-auto my-14 px-6 sm:my-16 sm:px-8 lg:my-12 lg:px-20">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>
