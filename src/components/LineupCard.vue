<template>
    <div>
        <div v-if="lineups.length === 0">
            <p>No lineups set.</p>
        </div>
        <div v-else v-for="(lineupData, index) in lineups" :key="index" class="bg-white shadow-md rounded-lg py-4 max-w-sm mb-2">
            <h1 class="text-2xl font-bold text-center mb-2">Lineup {{ index + 1 }}</h1>
            <div class="flex items-center mx-4 ">
                <p class="text-2xl">Q</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-1 ml-2 mb-2 w-80">
                    <span class="">{{ lineupData._value.q }}</span>        
                </div>

            </div>
            <div class="flex items-center ml-4">
                <p class="text-2xl">C</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-1 ml-2 mb-2 w-80">
                    <span class="">{{ lineupData._value.c }}</span>        
                </div>
            </div>
            <div class="flex items-center ml-4">
                <p class="text-2xl">X</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-1 ml-2 mb-2 w-80">
                    <span class="">{{ lineupData._value.x }}</span>        
                </div>
            </div>
            <div class="flex items-center ml-4">
                <p class="text-2xl">Y</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-1 ml-2 mb-2 w-80">
                    <span class="">{{ lineupData._value.y }}</span>        
                </div>
            </div>
            <div class="flex items-center ml-4">
                <p class="text-2xl">Z</p>
                <div class="flex items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-1 ml-2 mb-2 w-80">
                    <span class="">{{ lineupData._value.z }}</span>        
                </div>
            </div>
            <div class="px-8">
                <button @click="removeLineup(index)" class="w-40 flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm text-gray-500 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-offset-2  focus:ring-yellow-200">Remove Lineup</button>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['removeLineup']);

defineProps({
    lineups: Array,
    default: () => []
})

const removeLineup = (index) => {
    emit('removeLineup', index);
};
</script>
