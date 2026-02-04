<template>

<h1> Тестирую роутер</h1>

<img  :src="image"  :alt="altText"/>


<router-link to="/tail" class="my-btn">Т ХВОСТ</router-link>


<div v-if="userName" class="welcome-banner">
        <h2> "Здравствуйте, {{ userName }}, о великий странник!  " </h2>
      
    </div>

</template>




<script>
import { defineComponent } from "vue";
import { userName } from '@/store/user.js'



export default defineComponent({
 
  setup() {
    return {
      userName
    }
  },
data(){
  return{
    image: "./src/assets/moai/moaiAva.PNG",
    altText: "Аватарка моаи"
  }
},
  // Сохранение в localStorage при изменении (опционально)
  watch: {
    userName(newVal) {
      localStorage.setItem('userName', newVal)
    }
  },
  created() {
    // Загружаем имя из localStorage при старте
    const saved = localStorage.getItem('userName')
    if (saved) {
      userName.value = saved // ← важно: userName — это ref, меняем .value
    }
  }
})

</script>

<style>
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
.welcome-banner {
  background-color: #e6f7ff;
  border: 2px solid #1890ff;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #003366;
}

.input-section {
  text-align: center;
  margin-top: 20px;
}

input {
  padding: 8px 12px;
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 8px 16px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #40a9ff;
}
 
</style>