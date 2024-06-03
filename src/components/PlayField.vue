<template>
    <div class="relative w-full max-w-4xl h-96 bg-gray-100 border border-gray-300" ref="field" @mousedown="startLine" @mousemove="drawLine" @mouseup="endLine">
      <svg class="absolute inset-0 w-full h-full">
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#000" />
          </marker>
        </defs>
        <line-component v-for="line in lines" :key="line.id" :line="line" />
        <!-- Temporary line for drawing -->
        <line v-if="drawingLine" :x1="tempLine.start.x" :y1="tempLine.start.y" :x2="tempLine.end.x" :y2="tempLine.end.y" stroke="black" stroke-width="2" marker-end="url(#arrow)" />
      </svg>
      <player-icon
        v-for="player in players"
        :key="player.id"
        :player="player"
        @update-position="handleUpdatePlayerPosition"
      />
      <button
        class="absolute top-2 left-2 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
        @click="addNewPlayer"
      >
        Add Player
      </button>
      <button
        class="absolute top-2 left-32 bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
        @click="handleSavePlay"
      >
        Save Play
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PlayerIcon from './PlayerIcon.vue';
  import LineComponent from './LineComponent.vue';
  import { state, addPlayer, updatePlayerPosition, addLine, savePlay } from '../state';
  
  const players = ref(state.players);
  const lines = ref(state.lines);
  
  const drawingLine = ref(false);
  const tempLine = ref({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } });
  
  const addNewPlayer = () => {
    const newPlayer = {
      id: generateUniqueID(),
      name: 'Player',
      position: { x: 100, y: 100 }
    };
    addPlayer(newPlayer);
  };
  
  const handleUpdatePlayerPosition = (player) => {
    updatePlayerPosition(player);
  };
  
  const handleSavePlay = () => {
    savePlay();
  };
  
  const startLine = (event) => {
    drawingLine.value = true;
    tempLine.value.start.x = event.offsetX;
    tempLine.value.start.y = event.offsetY;
    tempLine.value.end.x = event.offsetX;
    tempLine.value.end.y = event.offsetY;
  };
  
  const drawLine = (event) => {
    if (drawingLine.value) {
      tempLine.value.end.x = event.offsetX;
      tempLine.value.end.y = event.offsetY;
    }
  };
  
  const endLine = (event) => {
    if (drawingLine.value) {
      drawingLine.value = false;
      addLine({ id: generateUniqueID(), start: { ...tempLine.value.start }, end: { ...tempLine.value.end } });
    }
  };
  
  const generateUniqueID = () => {
    return Math.floor(Math.random() * 1000000);
  };
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  </style>