<template>
   <div class="contain">
      <h2>Страница поста с id = {{ $route.params.id }}  </h2>   
   <div class="post">
      <p> <span class="title">Пользователь:</span> {{ post.userId }}</p>
      <p> <span class="title"> Содержание:</span> {{ post.body }}</p>
      <p> <span class="title"> Название поста:</span> {{ post.title }}</p>
   </div>    
   </div>
</template>

<script>
import axios from 'axios';
export default {
   props: {
      id: '',
   },
   data() {
      return {
         post: {},
      }
   },
   methods: {
      async fetchPostId() {
         try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`);
            this.post = response.data;
         } catch (e) {
            alert('Ошибка получения данных')
         } finally {
         }
      },
   }, 
   mounted() {
     console.log(this.id);
     this.fetchPostId()
   },
}
    
   
   
</script>
   
<style>
   .contain {
      width: 1100px;
      margin: 0 auto;
   }
   .post {
      padding: 20px;
      border: solid 2px #597;
      background: rgb(175, 235, 207);
   }
   p {
      font-size: 18px;
      margin-bottom: 8px;
   }
   .title {
      font-size: 18px;
      font-weight: 600;
   }
</style>