<template>
   <section>
      <h2>Страница постов Store</h2>
      <my-input
         :model-value="searchQuery" 
         @update:model-value="setSearcQuery" 
         placeholder="Поиск.... "  
         v-focus
      /> 

      <div class="app__btns">
         <my-button
            @click="showDialog"
         >
            Создать пост
         </my-button>
         
         <my-select 
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
         />
      </div>
      
      <my-dialog v-model:show="dialogVisible"> 
         <post-form @create="createPost"/>   
      </my-dialog>
  
      <div>
         <div class="app-posts">
            <post-list :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostLoading"
            />
            <h3 v-else> Загрузка данных... </h3>
            <div v-intersection="loadMorePosts" class="observer"></div>
            
         </div>
      </div>
   
   </section>
 </template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
//import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
   components: {
      PostForm,
      PostList,
      MyDialog,
      MyButton,
      MySelect,
      MyInput,
   },
   data(){
      return {
         dialogVisible: false,
      }
   },
   methods: {
      ...mapMutations({
         setPage: 'post/setPage',
         setSearcQuery: 'post/setSearcQuery',
         setSelectedSort: 'post/setSelectedSort',
         setPosts: 'post/setPosts'
      }),
      ...mapActions({
         loadMorePosts: 'post/loadMorePosts',
         fetchPosts: 'post/fetchPosts',
         delPost: 'post/delPost'
      }),
      createPost(post) {
         this.posts.push(post)  
      },
      removePost(post){
            this.delPost(post)
      },
      showDialog() {
         this.dialogVisible = true
      },
   },
   mounted() {
     this.fetchPosts(); 
   },
   watch: {
   },
   computed: {
      ...mapState({
         posts: state => state.post.posts,
         isPostLoading: state => state.post.isPostLoading,
         selectedSort: state => state.post.selectedSort,
         searchQuery: state => state.post.searchQuery,
         page: state => state.post.page,
         limit: state => state.post.limit,
         totalPages: state => state.post.totalPages,
         sortOptions: state => state.post.sortOptions,
      }),
      ...mapGetters({
         sortedPosts: 'post/sortedPosts',
         sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
      })
   },
}
</script>
<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   section {
      width: 1100px;
      margin: 10px auto;
   }
   h2 {
      padding: 10px 0 20px 0;
   }
   .app-posts {
      padding-top: 20px;
   }
   .app__btns {
      max-width: 1100px;
      display: flex;
      justify-content: space-between;
   }
   .page__wrapper {
      display: flex;
      margin-top: 15px;
      justify-content: center;
   }
   .page {
      margin: 0 5px;
      border: solid 2px #597;
      border-radius: 4px ;
      padding: 8px;
      background: #eee;
      font-weight: 600;
      color: rgb(36, 104, 70);
   }
   .current-page {
      border: solid 2px rgb(245, 108, 104);
      background: rgb(157, 236, 197);
   }
   .observer {
      height: 30px;
      background: rgb(157, 236, 197);
   }
</style>