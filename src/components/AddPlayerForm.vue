<template>
    <div class="bg-white shadow-md rounded-lg px-8 py-4 max-w-sm">
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
                    <option value="c">Center</option>
                    <option value="rb">Runningback</option>
                    <option value="wr">Wide Receiver</option>
                </select>
            </div>
            <div class="flex items-center">
                <button type="submit" class="w-40 flex justify-center py-2 px-4 mr-16 border rounded-md shadow-sm text-sm text-gray-500 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-offset-2  focus:ring-yellow-200">Add Player</button>
                <button class="w-40 flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm text-gray-500 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-offset-2  focus:ring-yellow-200" @click="$emit('cancelAddPlayer')">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref ('');
const position = ref ('');

const emit = defineEmits(['playerSubmitted', 'cancelAddPlayer'])

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
