<template>
  <div class="navbar">
   <div class="name-site"  @click="$router.push('/')"> Название сайта <span class="name-add">(переход на главную страницу)</span></div>
   <div class="navbar__btns">
      <my-button class="nav-btn" @click="$router.push('/posts')"> Посты</my-button>
      <!-- <my-button class="nav-btn" @click="$router.push('/about')">О сайте</my-button> -->
      <my-button class="nav-btn" @click="$router.push('/store')"> Посты Store</my-button>
      <my-button class="nav-btn" @click="$router.push('/composition')"> Посты Compose</my-button>
   </div>

  </div>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
  name: 'Navbar',
  components: { MyButton },

}
</script>

<style>
   .navbar {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%); 
      width: 100%;
      z-index: 5;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
      height: 60px;
      background-color: teal;
      box-shadow: 2px 2px 4px gray;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .name-site {
      font-size: 30px;
      color: aquamarine;
      cursor: pointer;
   }
   .name-site:hover {
      color: azure;
   }
   .name-add {
      font-size: 18px;
   }
   .nav-btn {
      margin-right: 20px;
   }
   .nav-btn:last-child {
      margin-right: 0;
   } 
</style>