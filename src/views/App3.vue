<template>
  
<div>
  

  <h1>{{ count }}</h1>
  <button class="btn--danger" @click="count++"> ДЛЯ РЕЛАКСА   </button>
  
  
  
    <button
       v-for="tab in tabs"
       :key="tab"  @click="currentTab = tab.name"
       :class="['tab-button', { active: currentTab === tabs }]"  
     > {{tab.title}}</button>
	  <component :is="currentTab" class="tab" ></component>
  </div>
  
   
 
   


</template>
  




<script>
import Tail from "./tail.vue"
import Perfume from "./Perfume.vue"
import heropizd from "./heropizd.vue"
import {defineComponent} from "vue"




export default defineComponent(
{
components: {
  heropizd,
  Tail,
  Perfume,
  App,
  
},
data(){
  return{
    count: 0,
    currentTab: "perfume",
    tabs: [{name:"App",title: "ГЛАВНАЯ СТРАНИЦА"}, 
          {name: "heropizd", title: "НАСАДКИ УТОЛЩИТЕЛИ"},
          {name: "Tail", title: "Анальные забавы"},
          {name: "Perfume", title: "Парфюм 18+"}]
  }
}
})



</script>

<style scoped>
.btn--primary {
  background: #42a5f5;
  color: #fff;
}
.btn--secondary {
  background: #fff;
  color: #333;
  border: 1px solid #bdbdbd;
}
.btn--danger {
  background: #e53935;
  color: #fff;
}
.btn--disabled, .btn:disabled {
  background: #e0e0e0 !important;
  color: #bdbdbd !important;
  cursor: not-allowed;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.background-image {
  background-image: url('@/assets/moai/moai3.jpg'); /* Путь к изображению */
  background-size: cover;                           /* масштабирует изображение на весь экран */
  background-position: center;                      /* центрирует изображение */
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh; /* или нужная высота высота фона равна высоте экрана */ 
  min-height: 100vh

}

</style>
