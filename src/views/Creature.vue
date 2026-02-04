<template>
    <div>
      <h2>Это существо: {{ name }}</h2>
      <p>Тип: {{ name }}</p>
    </div>
  </template>
  
  <script setup>

  //для динамической роут
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const name = route.params.name
  </script>