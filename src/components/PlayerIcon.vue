<template>
    <div
      class="absolute w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer select-none"
      :style="{ left: player.position.x + 'px', top: player.position.y + 'px' }"
      @mousedown="startDrag"
    >
      {{ player.name }}
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    player: Object
  });
  
  const emit = defineEmits(['update-position']);
  
  const startDrag = (event) => {
    event.preventDefault();
  
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = props.player.position.x;
    const startTop = props.player.position.y;
  
    const onMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      emit('update-position', { ...props.player, position: { x: startLeft + dx, y: startTop + dy } });
    };
  
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  </script>
  
  <style scoped>
  .absolute {
    position: absolute;
  }
  </style>