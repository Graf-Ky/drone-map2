<template>


<div class="welcome-banner">
<h2>  *** Великий странник {{ userName }}, осмотрись! ***</h2>
</div>






<h1> {{ word }}  </h1>
<div>
  <h1> {{ product }}   </h1>
</div>

<div>
  
  <p2>Пробка анальная с хвостиком 46 см, для ролевых секс игр, металлическая 30мм средняя</p2>
</div>



<img  :src="imageTail"  :alt="altText"/>
<img  :src="imageTail2"  :alt="altText"/>
<img  :src="imageTail3"  :alt="altText"/>
<img  :src="imageTail4"  :alt="altText"/>
    <div>
      <li>Пробка анальная с хвостиком 46 см, для ролевых секс игр, металлическая 30мм средняя</li>
      <li>Описание:</li>
      Дикая волчица, длинный хвостик аниме. Металлическая анальная пробка с хвостиком, среднего размера (ширина 3см), конуснообразная форма обеспечивает лучшее проникновение и комфортное введение. Длина пушистого хвоста 38,5 см. Искусственный мех. Рекомендуем использовать лубрикант. Игрушка для взрослых, подходит для подготовки в анальному сексу. Ролевых интимных игр. Придаст изюминку в постельной страсти. Можете совместить +в тандеме к БДСМ. Товар для взрослых забав. Всадите её.

    </div>
    <div>
      <li>СОСТАВ:</li>
      Металл, Искусственный мех, Металлический сплав

    </div>


 
       
</template>

    

<script>
import { defineComponent } from "vue";
import { userName } from "@/store/user";

export default defineComponent( {
 
  setup() {
    return {
      userName
    }
  },
  data() {

    
    return {
      
      imageTail: "./src/assets/фото18/хвост/хвост.PNG",
      imageTail2: "./src/assets/фото18/хвост/хвост2.PNG",
      imageTail3: "./src/assets/фото18/хвост/хвост3.PNG",
      imageTail4: "./src/assets/фото18/хвост/хвост4.PNG",
      product: "TAIL АНАЛЬНЫЙ ХВОСТИК MOAI",
      word: "MOAI",
      altText: "НЕ ЗАГРУЗИЛАСЬ КАРТИНКА",
      telega: "https://t.me/Graf_otoDrakula",
      link: "https://www.wildberries.ru/seller/952479",
      
     
    }
  }
})


</script>



<style>

body {
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(13,42,201,1) 100%);
    min-height: 100vh;  
    text-align: center;
    font-family: "Nabla",sans-serif;
    font-size: larger;
}
a {
  color: black;
}
h1 {
  color: red;
  font-size: xx-large
}
p1 {
  color: black;
  font-size: xx-large
}
.first-tab-content h2 {
  color: green;
}

</style>