<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container mx-auto my-14 sm:my-16 lg:my-12 px-6 sm:px-8 lg:px-20">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>
