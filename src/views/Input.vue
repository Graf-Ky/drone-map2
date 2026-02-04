<template>
   <input type="number" @input="changeAmount($event.target.value)" placeholder="введите сумму">
   <button @click="convert()">коневертировать</button>
    
    </template>
    
    
    
    
    <script>
   export default {
    props: {
        changeAmount: {
            type: Function,
            required: true,
        },
        convert: {
            type: Function,
            required: true,
        }
    }
   }
    </script>
    
    
    
    <style scoped>
    
    </style>