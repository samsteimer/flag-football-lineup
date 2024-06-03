<template>
    <header class="sticky top-0  bg-slate-400 shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <RouterLink :to="{name: 'home' }">
                <div class="flex items-center gap-3 flex-1">
                    <i class="fa-solid fa-football text-2xl"></i>
                    <p class="text-white text-2xl items-center">Flag Football Lineups</p>
                    
                </div>
            </RouterLink>
            <RouterLink :to="{name: 'playmaker'}">
                <div class="flex gap-3 flex-1 justify-end">
                    <p class="text-xl hover:text-black duration-150 cursor-pointer">Playmaker</p>
                </div>
            </RouterLink>
            <div class="flex gap-3 flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-black duration-150 cursor-pointer"></i>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

