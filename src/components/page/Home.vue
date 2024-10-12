<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex justify-center gap-10">
    <router-link
      :to="{ name: 'NewsPostCheckerHome' }"
      class="block text-center"
    >
      <Button> News Post Checker </Button>
    </router-link>
    <router-link :to="{ name: 'GroupMakerHome' }" class="block text-center">
      <Button> Group Maker </Button>
    </router-link>
  </div>
</template>
