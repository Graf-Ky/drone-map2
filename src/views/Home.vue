<!-- src/views/Home.vue -->
<template>
<img :src="image" :alt="altText">

<div class="slider">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide"
        v-show="currentIndex === index"
        class="slide"
        alt="Slide image"
      /> </div>

<div
    class="home"
    :style="{ backgroundImage: `url(${myBg})` }"
  >
   
  
    <h1>Главная страница</h1>
    

    <nav>
      <router-link to="/" class="btn--danger">MAIIIN</router-link> 
    </nav>
  








 <div>
    <h1>M O A I</h1>
    <p1>ВЫБЕРЕТЕ КАТЕГОРИЮ</p1>
    <span>ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ!!</span>
  </div>
    
      <router-link to="/tail" class="my-btn">Анальный карнавал</router-link>
      <router-link to="/perfume" class="my-btn">PERFUME (18+)</router-link>
      <router-link to="/heropizd" class="my-btn">Эмитаторы(18+)</router-link>
      <router-link to="/newww" class="my-btn">АВАТАРКА тестовая</router-link>
      

      <button class="my-btn" disabled>НОВИНКИ</button>
      <button class="my-btn" disabled>ОТЗЫВЫ</button>
    </div>

    <ul>
      <li><a :href="telega" target="_blank">ТЕЛЕГА</a></li>
      <li><a :href="link" target="_blank">ВАЙЛДВЕРИЗ</a></li>
      <a :href="link" target="_blank">***ВСЕ ТОВАРЫ***</a>
    </ul>
  


  <div style="margin: 20px 0;">
      <button @click="goTo('/')">НОВАЯЯЯЯ</button>
      <button @click="goTo('/tail')">ХВОСТО ТЕСТ</button>

      <div class="input-section">
      
    
      <input v-model="userName" @click="" placeholder="Введите ваше имя" />
      <button @click="confirmName">OK</button>
    </div>
    <div v-if="userName" class="welcome-banner">
        <h2> "Здравствуйте, {{ userName }}, о великий странник!  " </h2>
      
    </div>
    </div>



</template>

<script>


import оба from '@/assets/фото18/духи/оба.jpg'
import хвост from '@/assets/фото18/хвост/хвост.PNG'
import анал from '@/assets/фото18/хер/анал.webp'
import пачка from '@/assets/фото18/хер/пачка.webp'


import myBg from '@/assets/moai/moai3.jpg' //это для фоново й картинки ипаортирую ее как переменную
import { userName } from '@/store/user'




export default {
  setup(){
    return{
      userName
    }
  },
  data() {
    return {
      telega: "https://t.me/Graf_otoDrakula",
      link: "https://www.wildberries.ru/seller/952479",
      image: "./src/assets/moai/moaiAva.PNG",
      altText: "ОШИБКА ЗАГРУЗКИ КАРТИНКИ",
      slides: [оба, хвост, анал, пачка],
      
        currentIndex: 0,       // Индекс текущего слайда
        intervalId: null,       // Идентификатор таймера (для очистки позже) 


         myBg  // сохраняем путь в реактивную переменную (для фонового рисунка это делаю)
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
    },
    goTo(path){
      this.$router.push(path)
    }
    }}
</script>

<style>
/* твои стили (можно перенести из App.vue) */
h1 { color: red; }
.my-btn {
  background: #20b2aa;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;
}
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
  
  
  
  .btn--danger {
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
  .home {
  /* Эти свойства управляют отображением */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  /* НЕ пишите background-image здесь! */
}
 
  
</style>