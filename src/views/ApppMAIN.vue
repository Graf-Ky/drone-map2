<template>



    <!-- Слайдер -->
    <div class="slider">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide"
        v-show="currentIndex === index"
        class="slide"
        alt="Slide image"
      />
    </div>
    
  
  
  
  
    <div class="background-image">
  <img  :src="image"  :alt="altText"/>
      
               <h1>  M O A I</h1>
          <p1> ВЫБЕРЕТЕ КАТЕГОРИЮ</p1>
      <span>ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ!!</span>
  
      <ul>  
       
          <button @click="" > ТОВАРЫ ДЛЯ ДЕТЕЙ</button>
          <button @click="perfume"> MM mm   ТОВАРЫ 18+ (взрослым)</button>
          
     
         
      <button @click=" "> НОВИНКИ</button>
      <button @click=" "> ОТЗЫВЫ</button>
          
      </ul>
  
      <ul>
        
  
  
          <li><a :href="telega" >ТЕЛЕГА </a> </li>
          
          <li><a :href="link">ВАЙЛДВЕРИЗ </a> </li>
          
          <a :href="link"  target="_blank"> ***ВСЕ ТОВАРЫ*** </a> 
      
          
      </ul>
      
    
      <div>
        
        
        
  </div>
  
  
  </div>
  
  </template>
  
  
      
  
  <script>     
  
  
  import { defineComponent } from 'vue';
  import Perfume from './Perfume.vue'
  
  
  // В начале файла, после import'ов
  import оба from '@/assets/фото18/духи/оба.jpg'
  import хвост from '@/assets/фото18/хвост/хвост.PNG'
  import анал from '@/assets/фото18/хер/анал.webp'
  import пачка from '@/assets/фото18/хер/пачка.webp'
  
  
  
    export default defineComponent( {
  components: {
  Perfume
  },
  name: 'AutoSlider',
      data(){
          return {
              message: " ",
              image: "./src/assets/moai/moaiAva.PNG",
              computedUrl: "./src/components/perfume.vue",
              telega: "https://t.me/Graf_otoDrakula",
              link: "https://www.wildberries.ru/seller/952479", 
              altText: "НЕ ЗАГРУЗИЛАСЬ КАРТИНКА", 
                    // Массив слайдов (может содержать строки, пути к картинкам и т.д.)
        slides: [оба, хвост, анал, пачка],
        currentIndex: 0,       // Индекс текущего слайда
        intervalId: null       // Идентификатор таймера (для очистки позже) 
             
          }
          
      },
  
  
  
      mounted() {
      // Запускаем автоматическую смену слайдов, когда компонент появился в DOM
      this.startAutoSlide()
    },
    beforeUnmount() {
      // Останавливаем таймер, когда компонент удаляется (чтобы избежать утечек памяти)
      this.stopAutoSlide()
    },
    methods: {
      startAutoSlide() {
        // setInterval вызывает функцию каждые 1000 мс (1 секунда)
        this.intervalId = setInterval(() => {
          // Увеличиваем индекс на 1, но "оборачиваем" его с помощью % (остаток от деления),
          // чтобы после последнего слайда снова показывался первый
          this.currentIndex = (this.currentIndex + 1) % this.slides.length
        }, 2000)
      },
  
      stopAutoSlide() {
        // Очищаем интервал, если он существует
        if (this.intervalId) {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }
    }
  
      })
  
  </script>
      
  
  <style>
  span {
    display: inline-block;
    transform: translate(22em, -6em);
  }
  p1 {
    display: inline-block;
    transform: translate(08em, -1px);
  }
  
  
  
  body {
      background: rgb(34,193,195);
      background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(13,42,201,1) 100%);
      min-height: 100vh;  
      text-align: center;
      font-family: "Montez",sans-serif;
      font-size: larger;
    
      
  }
  h1 {
      color: red;
  }
  
  .my-btn {
    background: #20b2aa;
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .my-btn:hover {
    background: #009688;
  }
  
  .background-image {
    background-image: url('@/assets/moai/moai3.jpg'); /* Путь к изображению  */
    background-size: cover;                           /* масштабирует изображение на весь экран */
    background-position: center;                      /* центрирует изображение */
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh; /* или нужная высота высота фона равна высоте экрана */ 
    min-height: 100vh
  }
  btn--danger {
    background: #e53935;
    color: #fff;
  }
  a {
    color: rgb(0, 87, 7); /* меняет цвет текста у всех ссылок */
  }
  /* Стили для слайдера */
  .slider {
    width: 100%;
    max-width: 600px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
  
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: #f5f5f5;
    color: #333;
  }
  
  </style>