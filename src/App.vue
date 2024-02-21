<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container mx-auto my-12 px-20">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>
