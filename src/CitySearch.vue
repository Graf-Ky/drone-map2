<template>


<div>
  <button @click="callSearch">поиск города</button>
  <input v-model="searchTown" @keyup.enter="callSearch" placeholder="введите город"></input>

</div>



</template>
 



<script setup>
import { ref  } from "vue"
let searchTown= ref("")
const emit = defineEmits(['search'])

function callSearch(){
  if(searchTown.value.trim()){
  emit('search', searchTown.value)
  searchTown.value = ''
}}

</script>