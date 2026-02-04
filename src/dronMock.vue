<template>
  <div style="padding: 20px; max-width: 500px; margin: 0 auto;">
    <h1>Панель управления дроном</h1>
    <div style="width: 100%; height: 20px; border: 1px solid #333; margin: 10px 0;">
      <div :style="{ width: battery + '%', height: '100%', backgroundColor: battery > 20 ? 'green' : 'red' }"></div>
    </div>
    <p>Высота: {{ altitude }} м</p>
    <p>Заряд: {{ battery }} %</p>
    <p>Статус: {{ isFlying ? "В воздухе" : "На земле" }}</p>
    <p>ШИРОТА: {{ lat.toFixed(4) }} ДОЛГОТА: {{ lng.toFixed(4) }}</p>
    <div id="map" style="width: 100%; height: 300px; margin-top: 20px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import maplibregl from 'maplibre-gl'

const lat = ref(0)
const lng = ref(0)
const battery = ref(0)
const altitude = ref(0)
const isFlying = ref(false)

let map = null
let droneMarker = null
let targetMarker = null
let socket = null

onMounted(() => {
  socket = new WebSocket('ws://localhost:8080')

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)

    lat.value = data.lat
    lng.value = data.lng
    battery.value = data.battery
    altitude.value = data.altitude
    isFlying.value = data.isFlying

    // Обработка цели
    if (data.targetLat != null && data.targetLng != null) {
      const tLat = Number(data.targetLat)
      const tLng = Number(data.targetLng)
      if (!isNaN(tLat) && !isNaN(tLng)) {
        if (!targetMarker) {
          const el = document.createElement('div')
          el.innerHTML = '🎯'
          el.style.fontSize = '24px'
          el.style.textAlign = 'center'
          targetMarker = new maplibregl.Marker({ element: el }).addTo(map)
        }
        // 💡 Защита от undefined
        if (targetMarker) {
          targetMarker.setLngLat([tLng, tLat])
        }
      }
    } else if (targetMarker) {
      targetMarker.remove()
      targetMarker = null
    }

    // Обновление дрона
    if (droneMarker) {
      droneMarker.setLngLat([lng.value, lat.value])
    }
  }

  map = new maplibregl.Map({
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: [37.6176, 55.7558],
    zoom: 10
  })

  map.on('click', (e) => {
    socket.send(JSON.stringify({ type: 'setTarget', lat: e.lngLat.lat, lng: e.lngLat.lng }))
  })

  const droneEl = document.createElement('div')
  droneEl.innerHTML = '😊'
  droneEl.style.fontSize = '24px'
  droneEl.style.textAlign = 'center'
  droneMarker = new maplibregl.Marker({ element: droneEl })
    .setLngLat([37.6176, 55.7558])
    .addTo(map)
})

onBeforeUnmount(() => {
  if (socket) socket.close()
  if (map) map.remove()
})
</script>

<style scoped></style>