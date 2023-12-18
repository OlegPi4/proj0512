<template>
   <section>
      <h2>Посты Composition API</h2>
      <my-input
         v-model="searchQuery" 
         placeholder="Поиск.... "  
         v-focus
      />
      <div class="app__btns">
         <my-select 
            v-model="selectedSort"
            :options="sortOptions"
         />
      </div>
      <div>
         <div class="app-posts">
            <post-list :posts="sortedAndSearchedPosts"
            v-if="!isPostLoading"
            />
            <h3 v-else> Загрузка данных... </h3>
            <!-- <div v-intersection="page" class="observer"></div> -->
            <div class="page__wrapper"> 
               <div 
                  v-for="pageNumber in totalPages" 
                  :key="pageNumber"
                  class="page"
                  :class="{
                     'current-page': page === pageNumber 
                  }"
                  @click="changePage(pageNumber)"
                  >
                  {{ pageNumber }}
               </div>

            </div>
         </div>
      </div> 
   
   </section>
 </template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import usePosts from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
import { ref } from 'vue'

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
         
         page: 2,
         dialogVisible: false,
         sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'},
         ]
      }
   },
   props: {
      limit: {
         type: Number,
         default: 10,
      },
      page: {
         type: Number,
         default: 3,
      }

   },
   // включение хуков
   setup(props) {
      const {posts, totalPages, isPostLoading} = usePosts(props.limit, props.page);
      const {selectedSort, sortedPosts} = useSortedPosts(posts);
      const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts) 
      
      return {
          
          posts,
          totalPages,
          isPostLoading,
          selectedSort, 
          sortedPosts,
          searchQuery, 
          sortedAndSearchedPosts,
      }
   },
   methods: {
      
      changePage(pageNumber) {  
         this.page = pageNumber
         console.log(this.page)
      },   
   },
   // watch: {
   //    page() {  
   //       this.fetchPosts();
   //    }
   // },
}
</script>
<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   section {
      padding-top: 80px;
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