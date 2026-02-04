<template>

<div class="welcome-banner">
<h2>  ***  Странник {{ userName }} аромата и обаяния ! ***</h2>
</div>

<template>
  <div>
    <h1>Главная страница</h1>
    <p>Выберите категорию:</p>
    <nav>
      <router-link to="/Perfume"> ДУХИ</router-link>
    </nav>
  </div>
</template>








    <h1> {{ word }}  </h1>
    <div>
      <h1> {{ product }}   </h1>
     
    </div>
    <div>
      
      <p2>Духи MOAI мужские с феромонами</p2>
    </div>
    
    
    
    <img  :src="image1"  :alt="altText"/>
    <img  :src="image2"  :alt="altText"/>
    <img  :src="image3"  :alt="altText"/>
    <img  :src="image4"  :alt="altText"/>
    <img  :src="image5"  :alt="altText"/>
        <div>
          <li>Духи с феромонами мужские и женские MOAI</li>
          <li>Описание:</li>
          Феромон духи - грех и любовь леди в ловушке и мужские духи, искушение мужчины и женщины с флиртом, странная любовь. Аромат, который всегда привлекает парней и девушек. Специальное разделение духов для соблазна женщин и для соблазна мужчин . Этот парфюм можно отнести к интим товарам, ведь он оказывает воздействие в сексуальной жизни. Компонент оказывает воздействие на определенный участок в её и его головном мозге и позволяет слегка управлять поведением собеседника. Вызывает влечение, повышает мужское и женское либидо .Духи возбудят и дадут настроение на секс и влечение. Романтические чувства.

Как идея подойдёт в подарок.
    
        </div>
        <div>
          <li>СОСТАВ:</li>
          Этанол, вода, эссенция, феромон аттрактанты 
    
        </div>
    
    
        
    
    
    </template>
    
        
    
    <script>
    import { userName } from '@/store/user';
    export default {
      setup(){
        return{
          userName
        }
      },
      data() {
        return {
            name: 'perfume',
            image1: "./src/assets/фото18/духи/пара.jpg",
            image2: "./src/assets/фото18/духи/оба.jpg",
            image3: "./src/assets/фото18/духи/м.jpg",
            image4: "./src/assets/фото18/духи/жен.jpeg",
            image5: "./src/assets/фото18/духи/пати.jpeg",
            product: "ДУХИ  С ФЕРОМОНАМИ MOAI",
            word: "MOAI",
            altText: "НЕ ЗАГРУЗИЛАСЬ КАРТИНКА",
            telega: "https://t.me/Graf_otoDrakula",
            link: "https://www.wildberries.ru/seller/952479"
        }
      
    
      },
    }
    
    
    </script>
    
    
    
    <style scoped>
    
    
    
    
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
    .second-tab-content h2 {
    color: blue;
    }
    
    </style>