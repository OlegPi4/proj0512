<template>
  <div class="contain">
   <h1>Курс Vue 3</h1> 
   <div>
    <h2>
        Posts site  изучение Vue 3 +(Router, Vuex, CompositionAPI)  
        <a href="https://www.youtube.com/watch?v=XzLuMtDelGk&t">videokurs</a> 
    </h2> 
    <h3>В приложении реализован следующий функционал:</h3>
    <ul class="section-main">
      
      <li>  получения постов по get запросу с использованием библиотеки Axios;</li>
      <li>  routing - реализация многостраничности;</li>
      <li>  посты на странице добавляются и удаляются с анимацией;</li>
      <li>  сортировка по названию поста и по содержимому с анимацией,    сортировка по id в "Посты" и "Посты Store" <span class="error">
        (есть глюки - В "Посты" - удваивается колличество постов,  "Посты Store" - не обновляется страница (нужно зайти на другую страницу, потом вернуться))
      </span>;</li> 
      <li>  открытие поста с переходом на новую страницу - в стандартном подходе - запрос по іd на сервер (созданный пост не подтянется) ;</li>
      <li>  по достижению нижней границы экрана и пересечении блока с зеленой строкой отслеживается пересечение и подгружается новая порция постов (limit 10);</li>
      <li>  реализован постраничный переход между страницами с постами (закоментирован в PоstPage);</li>
      <li>  функционал реализован с использованием трех подходов с вызовом разных страниц:  
        <ul class="section-under">
          <li>  "Посты"  со стандартным подходом;</li>
          <li>  "Посты Store" c использованием Vuex;</li>
          <li>  "Посты Compose" с использованием Composition API;</li>
        </ul>
      </li>  
      </ul>
    <h3 >
      В процессе декомпозиции вынесены в отдельные модули и компоненты:
    </h3>
    <h4>модули components\UI\</h4>
    <ul class="section-main">
      <li>  кнопка - MyButton;</li>
      <li>  диалоговое окно - MyDialog;</li>
      <li>  input - MyInput;</li>
      <li>  select - MySelect;</li>
      <li>  меню - NavBar.</li>
    </ul>
    <h4>компоненты components\</h4>
    <ul class="section-main">
      <li>  PostForm - форма добавления поста;</li>
      <li>  PostItem - отдельный пост;</li>
      <li>  PostList - список постов.</li>
    </ul>   
    <h4>пользовательские директивы directives\:</h4>
    <ul class="section-main">
      <li>  VFocus - фокусировка на элементе;</li>
      <li>  VIntersection - пересечение элемента;</li>
    </ul>          
    <h4>миксины mixins\:</h4>
    <ul class="section-main">
      <li>  toggleMixin  -  тогл.</li>
    </ul>
  </div>
  <h4>Функционал "Посты Compose" ограничен, исключены функции: </h4>
    <ul class="section-main">
      <li>  Создание / Удаление поста</li>
      <li>  Подгрузка постов по скролу к последнему;</li>
    </ul> 
  </div>
</template>

<script>
export default {
  }
</script>

<style>
.contain {
  padding-top: 80px;
  max-width: 1100px;
  margin: 0 auto;
}
h3 {
  margin-bottom: 10px;
  font-size: 22px;
}
h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}
li {
  margin-left: 15px;
  list-style: none;
}
li::before{
  content: '-';
}
ul {
  margin-bottom: 10px;
}
.section-under li::before{
  content: '*';
}
.section-main {
  font-size: 22px;
  font-weight: 600;
}
li{
  padding: 2px 20px;
  font-size: 18px;
  font-weight: 500;
}
.error {
  color: rgb(223, 59, 47)
}
</style>