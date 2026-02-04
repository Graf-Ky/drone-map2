<template>

    <div style="padding: 20px; max-width: 500px; margin: 0 auto;">
        <h1>Панель управления дроном</h1>

        <!-- Индикатор заряда -->
        <div style="width: 100%; height: 20px; border: 1px solid #333; margin: 10px 0;">
            <div :style="{ width: battery + '%', height: '100%', backgroundColor: battery > 20 ? 'green' : 'red' }">
            </div>
            
        </div>


        <button @click="getFly">взлет</button>
        <button @click="getGround">посадка</button>
        <div style="margin-top: 10px;">
            <button @click="moveForward">↑ Вперёд</button><br>
            <button @click="moveLeft">← Влево</button>
            <button @click="moveRight">→ Вправо</button><br>
            <button @click="moveBackward">↓ Назад</button>
        </div>
        <p>Высота: {{ altitude }} м</p>
        <p>Заряд: {{ battery }} %</p>
        <p>Статус:{{ isFlying ? "В воздухе" : "На земле" }}</p>
        <p>ШИРОТА:{{ lat.toFixed(4) }} ДОЛГОТА: {{ lng.toFixed(4) }}</p>




        <div id="map" style="width: 100%; height: 300px; margin-top: 20px;"></div>
    </div>

</template>





<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import maplibregl from 'maplibre-gl'

const altitude = ref(0) //высота
const battery = ref(100) //заряд
const isFlying = ref(false) // летит ли
let intervalId = null

const lat = ref(55.7558)
const lng = ref(37.6176)


let map = null
let droneMarker = null


// Создаём элемент с эмодзи
const el = document.createElement('div')
el.innerHTML = '😊'
el.style.fontSize = '24px'        // размер
el.style.textAlign = 'center'     // центрирование
el.style.lineHeight = '1'         // чтобы не было лишнего отступа


onMounted(() => {
    map = new maplibregl.Map({
        container: 'map', // id контейнера
        style: 'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json', // бесплатный стиль
        center: [37.6176, 55.7558], // [долгота, широта] — Москва
        zoom: 10
    })
    droneMarker = new maplibregl.Marker({ element: el })
        .setLngLat([lng.value, lat.value])
        .addTo(map)

    // Твой setInterval — оставь ниже
})
intervalId = setInterval(() => {
    if (isFlying.value && battery.value > 0) {
        if (altitude.value < 20) {
            altitude.value += 0.5

        } battery.value -= 1


        if (droneMarker) {
            droneMarker.setLngLat([lng.value, lat.value])
        }
    }
    if (battery.value <= 0) {
        isFlying.value = false
        altitude.value = 0
    }

}, 1000)


onUnmounted(() => {
    map.remove()
    clearInterval(intervalId)
})

function getFly() {
    if (battery.value > 0) {
        isFlying.value = true
        altitude.value = 0
    }
}


function getGround() {
    isFlying.value = false
    altitude.value = 0
}

function moveForward() {
    if (isFlying.value) {
        lat.value += 0.005 // идём "вперёд" → увеличиваем широту
    }
}
function moveBackward() {
    if (isFlying.value) {
        lat.value -= 0.005
    }
}
function moveLeft() {
    if (isFlying.value) {
        lng.value -= 0.005 // влево → уменьшаем долготу
    }
}

function moveRight() {
    if (isFlying.value) {
        lng.value += 0.005
    }
}


</script>





<style scoped></style>