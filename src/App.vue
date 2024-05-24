<template>
  <div class="flex flex-col min-h-screen bg-slate-400">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue'

</script>

