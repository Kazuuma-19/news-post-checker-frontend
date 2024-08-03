<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex flex-col justify-center gap-10">
    <Button>
      <router-link :to="{ name: 'NewsPostCheckerHome' }">
        News Post Checker
      </router-link>
    </Button>
    <Button>
      <router-link :to="{ name: 'GroupMakerHome' }"> Group Maker </router-link>
    </Button>
  </div>
</template>
