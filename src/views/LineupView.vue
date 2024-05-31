<template>
    <div class="container flex flex-col justify-center sm:flex-row">
        <div class="flex flex-col">
            <TeamList :flagTeam="flagTeam" @playerDeleted="handlePlayerDeleted" @lineupSet="handleLineupSet" @addPlayer="showAddPlayerForm" class="m-1" />
        
            <AddPlayerForm v-if="isAddPlayerFormVisible" @playerSubmitted="handlePlayerSubmitted" @cancelAddPlayer="cancelAddPlayer" class="m-1" />
        </div>

        <LineupCard :lineups="lineups" @removeLineup="handleRemoveLineup" class="m-1"/>

    </div>
</template>

<script setup>
import AddPlayerForm from '../components/AddPlayerForm.vue';
import TeamList from '../components/TeamList.vue';
import LineupCard from '../components/LineupCard.vue';

import { ref, onMounted } from 'vue';


const flagTeam = ref ([]);
const lineups = ref ([]);
const isAddPlayerFormVisible = ref(false);


onMounted(() => {
    const savedTeam = JSON.parse(localStorage.getItem('flagTeam'));
    const savedLineups = JSON.parse(localStorage.getItem('lineups'));

    if (savedTeam) {
        flagTeam.value = savedTeam;
    };
    if (savedLineups) {
        lineups.value = savedLineups;
    }
});

const showAddPlayerForm = () => {
    isAddPlayerFormVisible.value = true;
};

const cancelAddPlayer = () => {
    isAddPlayerFormVisible.value =false;
}

const handlePlayerSubmitted = (player) => {
    flagTeam.value.push({
        id: generateUniqueID(),
        name: player.name,
        position: player.position
    });

    saveTeamToLocalStorage();

    isAddPlayerFormVisible.value = false;

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
};

const handleLineupSet = (newLineUp) => {
    if (newLineUp) {
        lineups.value.push(JSON.parse(JSON.stringify(newLineUp)));
        localStorage.setItem('lineups', JSON.stringify(lineups.value));
    }
};

const handleRemoveLineup = (index) => {
    lineups.value.splice(index, 1);
    localStorage.setItem('lineups', JSON.stringify(lineups.value));
};


</script>

