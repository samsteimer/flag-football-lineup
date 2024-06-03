<template>
    <line
      :x1="line.start.x"
      :y1="line.start.y"
      :x2="line.end.x"
      :y2="line.end.y"
      stroke="black"
      stroke-width="2"
      marker-end="url(#arrow)"
    />
  </template>
  
  <script setup>
  const props = defineProps({
    line: {
      type: Object,
      required: true
    }
  });
  </script>