<template>

    <div style="padding: 20px; max-width: 500px; margin: 0 auto;">
        <h1>Панель управления дроном</h1>

        <!-- Индикатор заряда -->
        <div style="width: 100%; height: 20px; border: 1px solid #333; margin: 10px 0;">
            <div :style="{ width: battery + '%', height: '100%', backgroundColor: battery > 20 ? 'green' : 'red' }">
            </div>
            
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


const lat = ref(55.7558)
const lng = ref(37.6176)
const targetLat = ref(55.7558)
const targetLng = ref(37.6176)





let map = null
let droneMarker = null
let droneSimulator = null
let targetMarker = null


// Создаём элемент с эмодзи
const el = document.createElement('div')
el.innerHTML = '😊'
el.style.fontSize = '24px'        // размер
el.style.textAlign = 'center'     // центрирование
el.style.lineHeight = '1'         // чтобы не было лишнего отступа

const mark = document.createElement('div')
mark.innerHTML = '🎯'
mark.style.fontSize = '24px'        // размер
mark.style.textAlign = 'center'     // центрирование
mark.style.lineHeight = '1'         // чтобы не было лишнего отступа


onMounted(() => {
    map = new maplibregl.Map({
        container: 'map', // id контейнера
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json', // бесплатный стиль
        center: [37.6176, 55.7558], // [долгота, широта] — Москва
        zoom: 10
    })  
    droneMarker = new maplibregl.Marker({ element: el })
        .setLngLat([lng.value, lat.value])
        .addTo(map)

    targetMarker = new maplibregl.Marker({ element: mark })
        .setLngLat([lng.value, lat.value])
        .addTo(map)    

        map.on('click', (event) => {
          targetLat.value = event.lngLat.lat
          targetLng.value = event.lngLat.lng

          if (targetMarker) {
          targetMarker.setLngLat([event.lngLat.lng, event.lngLat.lat])
          }
           
})  
        




        droneSimulator = setInterval(() => {

          
       const differenceLat = targetLat.value - lat.value
        lat.value = lat.value + differenceLat* 0.2 
       const differenceLng = targetLng.value - lng.value
        lng.value = lng.value+ differenceLng * 0.2 
    

    


    if (droneMarker) {
      droneMarker.setLngLat([lng.value, lat.value])
    }
    if (isFlying.value && battery.value > 0) {
        if (altitude.value < 20) {
            altitude.value += 0.2

        } battery.value -= 1
      } else {
    // Если заряд кончился — садимся
    isFlying.value = true
    altitude.value = 0
  }
}, 1000) 
})   




onUnmounted(() => {
  if (map) map.remove()
  if (droneSimulator) clearInterval(droneSimulator)
})

</script>





<style scoped></style>