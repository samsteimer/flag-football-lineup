<template>
    <div class="bg-white shadow-md rounded-lg px-8 py-4 max-w-md">
        <h1 class="text-2xl font-bold text-center mb-2">Enter Player</h1>
        <form @submit.prevent="onSubmit">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm mb-2">Player</label>
          
                <input class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400" id="name" type="text" placeholder="Enter name" v-model="name" required>
            </div>
            <div class="mb-4">
                <label for="position" class="block text-gray-700 text-sm mb-2">Preferred Position</label>
                <select class="text-gray-400 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400" name="position" id="position" v-model="position">
                    <option value="qb">Quarterback</option>
                    <option value="center">Center</option>
                    <option value="rb">Runningback</option>
                    <option value="wr">Wide Receiver</option>
                </select>
            </div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-yellow-400 hover:bg-yelow-700 focus:outline-none focus:ring-offset-2 focus:ring-yellow-200">Add Player</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref ('');
const position = ref ('');

const emit = defineEmits(['playerSubmitted'])

const onSubmit = () => {
    const playerData = {
        name: name.value,
        position: position.value
    }

    emit('playerSubmitted', playerData);

    name.value = '';
    position.value = '';
}
</script>
