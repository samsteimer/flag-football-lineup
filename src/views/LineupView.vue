<template>
    <div class="flex flex-col m-2">
        <AddPlayerForm @playerSubmitted="handlePlayerSubmitted" class="m-1" />
        
        <TeamList :flagTeam="flagTeam" @playerDeleted="handlePlayerDeleted" @lineupSet="handleLineupSet" class="m-1" />

        <LineupCard :lineups="lineups" class="m-1"/>

    </div>
</template>

<script setup>
import AddPlayerForm from '../components/AddPlayerForm.vue';
import TeamList from '../components/TeamList.vue';
import LineupCard from '../components/LineupCard.vue';

import { ref, onMounted } from 'vue';


const flagTeam = ref ([]);
const lineup = ref ({});
const lineups = ref ([]);

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
};

const handleLineupSet = (newLineUp) => {
    if (newLineUp) {
        lineups.value.push(JSON.parse(JSON.stringify(newLineUp)));
        localStorage.setItem('lineups', JSON.stringify(lineups.value));
    }
}
</script>

