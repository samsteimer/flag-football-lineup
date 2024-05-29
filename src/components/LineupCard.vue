<template>
    <div>
        <div v-if="lineups.length === 0">
            <p>No lineups set.</p>
        </div>
        <div v-else v-for="(lineupData, index) in lineups" :key="index" class="bg-white shadow-md rounded-lg px-8 py-4 max-w-md">
            <h1 class="text-2xl font-bold text-center mb-2">Lineup {{ index + 1 }}</h1>
            <div>
                <p>Q</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-2">
                    <span class="">{{ lineupData._value.q }}</span>        
                </div>

            </div>
            <div>
                <p>C</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-2">
                    <span class="">{{ lineupData._value.c }}</span>        
                </div>
            </div>
            <div>
                <p>X</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-2">
                    <span class="">{{ lineupData._value.x }}</span>        
                </div>
            </div>
            <div>
                <p>Y</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-2">
                    <span class="">{{ lineupData._value.y }}</span>        
                </div>
            </div>
            <div>
                <p>Z</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-2">
                    <span class="">{{ lineupData._value.z }}</span>        
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    lineups: Array,
    default: () => []
})


</script>
