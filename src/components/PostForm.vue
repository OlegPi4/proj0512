<template>
  <form @submit.prevent >
         <h3>Создание поста</h3>
         <my-input placeholder="Название" 
            v-focus
            v-model="post.title"/>   
         <my-input placeholder="Описание"   
            v-model="post.body"/>  
         <my-button @click="createPost">Создать</my-button>
         <span class="error" v-if="showError"> {{ showError }} </span>
      </form>
</template>

<script>
import MyInput from './UI/MyInput.vue'

export default {
  components: { MyInput },

   data() {
      return {
         post: {
            title: '',
            body: '',
         },
         showError: ''
      }
   },
   methods: {
      createPost() {
         if(!this.post.title) {
            this.showError = 'Введите название поста'
            return
         } else if (!this.post.body){
            this.showError = 'Введите описание поста'
            return
         } 
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
               title: '',
               body: ''
            }
            this.showError = ''
         }
         
      }, 
   }   

</script>

<style scoped>
   form {
      margin-bottom: 20px;
   }
  
 
   .error {
      margin-left: 30px;
      color: rgb(233, 53, 53);
      font-size: 18px;
   }
 
</style>