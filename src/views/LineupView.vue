<template>
    <div>
        <AddPlayerForm @playerSubmitted="handlePlayerSubmitted" />
        
        <TeamList :flagTeam @playerDeleted="handlePlayerDeleted" />

    </div>
</template>

<script setup>
import AddPlayerForm from '../components/AddPlayerForm.vue';
import TeamList from '../components/TeamList.vue';

import { ref, onMounted } from 'vue';

const flagTeam = ref ([]);

onMounted(() => {
    const savedTeam = JSON.parse(localStorage.getItem('flagTeam'));

    if (savedTeam) {
        flagTeam.value = savedTeam;
    }
});


const handlePlayerSubmitted = (player) => {
    flagTeam.value.push({
        id: generateUniqueID(),
        name: player.name,
        position: player.position
    });

    saveTeamToLocalStorage();

    alert('Player added.')
};

const generateUniqueID = () => {
    return Math.floor(Math.random() * 1000000);
};

const saveTeamToLocalStorage = () => {
    localStorage.setItem('flagTeam', JSON.stringify(flagTeam.value));
};

const handlePlayerDeleted = (id) => {
    flagTeam.value = flagTeam.value.filter((player) => player.id !== id);
    saveTeamToLocalStorage();
}
</script>

