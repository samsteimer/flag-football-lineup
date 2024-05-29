<template>
    <div class="bg-white shadow-md rounded-lg px-8 py-4 max-w-md">
        <h1 class="text-2xl font-bold text-center"> Team</h1>
        <div class="flex flex-col flex-1 px-8 py-1">
            <ul class="flex flex-col">
                <li v-for="player in flagTeam" v-bind:key="player.id" class="flex items-center mb-2">
                    <div class="flex flex-1 items-center bg-gray-200 shadow-sm rounded-md border border-gray-300 px-4 py-2 hover:cursor-move">
                        <button class="text-red-300 hover:text-red-600 mr-2" @click="deletePlayer(player.id)">
                            <i class="fa-solid fa-circle-minus"></i>
                        </button>
                        <span class="flex-1">{{ player.name }}</span>
                        <span class="uppercase">{{ player.position }}</span>
                    </div>
                    <div class="ml-2 flex items-center h-full">
                        <select class="bg-gray-200 shadow-sm rounded-md border border-gray-300 px-2 py-2 h-full" v-model="selectedPositions[player.id]">
                            <option value="none">-</option>
                            <option v-for="position in positions" :key="positions" :value="position" :disabled="isPositionSelected(position)">
                                {{ position.toLocaleUpperCase() }}
                            </option>
                        </select>
                    </div>
                </li>
            </ul>
        </div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm text-gray-500 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-offset-2  focus:ring-yellow-200" @click="setLineup">Set Lineup</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['playerDeleted', 'lineupSet'])

const props = defineProps({
    flagTeam: {
        type: Array,
        required: true
    }
});

const selectedPositions = ref({});
const positions = ['q', 'c', 'x', 'y', 'z']

const lineup = ref({
    q: '',
    c: '',
    x: '',
    y: '',
    z: ''
});


const deletePlayer = (id) => {
    emit('playerDeleted', id);
};

const setLineup = () => {
    lineup.value = {
        q: '',
        c: '',
        x: '',
        y: '',
        z: ''
    };

    props.flagTeam.forEach(player => {
        const position = selectedPositions.value[player.id];
        if (position && position !== 'none') {
            lineup.value[position] =player.name;
        }
    })
    
    
    emit('lineupSet', lineup);
    console.log(lineup);
};

const isPositionSelected = (position) => {
    return Object.values(selectedPositions.value).includes(position);
};


</script>
