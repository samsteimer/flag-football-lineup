<template>
    <div class="bg-white shadow-md rounded-lg px-8 py-4 max-w-md">
        <h1 class="text-2xl font-bold text-center"> Team</h1>
        <div class="flex flex-col flex-1 px-8 py-1">
            <ul class="flex flex-col">
                <li v-for="player in flagTeam" v-bind:key="player.id" class="mb-2">
                    <div class="flex items-center bg-gray-200 shadow-sm rounded-md px-4 py-2">
                        <span class="flex-1">{{ player.name }}</span>
                        <span class="flex-1 uppercase">{{ player.position }}</span>
                        <button class="text-red-300 hover:text-red-600" @click="deletePlayer(player.id)">
                            <i class="fa-solid fa-circle-minus"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['playerDeleted'])

defineProps({
    flagTeam: {
        type: Array,
        required: true
    }
});

const deletePlayer = (id) => {
    emit('playerDeleted', id);
}

</script>
