<template>
   <section>
      <h2>Страница с постами</h2>
      <!-- <h3>{{ $store.state.post.limit }}</h3> -->
      <!-- <my-input
         v-model="searchQuery" 
         placeholder="Поиск.... "  
         v-focus
      /> -->
      <div class="app__btns">
         <my-button
            @click="showDialog"
         >
            Создать пост
         </my-button>
         <!-- <my-select 
            v-model="selectedSort"
            :options="sortOptions"
         /> -->
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
import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';


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
      return {     // Vuex
         // posts: [],
         dialogVisible: false,
         // isPostLoading: false,
         // selectedSort: '',
         // searchQuery: '',
         // page: 1,
         // limit: 10,
         // totalPages: 0,
         // sortOptions: [
         //    {value: 'title', name: 'По названию'},
         //    {value: 'body', name: 'По содержимому'},
         //    //{value: 'id', name: 'По id'},  по id помилка
         // ]
      }
   },
   methods: {
      ...mapMutations({
         setPage: 'post/setPage',

      }),
      ...mapActions({
         loadMorePosts: 'post/loadMorePosts',
         fetchPosts: 'post/fetchPosts'
      }),
      createPost(post) {
         this.posts.push(post)  
      },
      removePost(post){
         this.posts = this.posts.filter(p => p.id != post.id)
      },
      showDialog() {
         this.dialogVisible = true
      },
      // changePage(pageNumber) {  // переделка в добавляющийся список
      //    this.page = pageNumber
      // },
      // async fetchPosts() {  // Vuex
      //    try {
      //       this.isPostLoading = true
      //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      //          params: {
      //          _page: this.page,
      //          _limit: this.limit
      //          }
      //       });
      //       this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      //       this.posts = response.data;
      //    } catch (e) {
      //       alert('Ошибка получения данных')
      //    } finally {
      //       this.isPostLoading = false
      //    }
      // },
      // async loadMorePosts() {
      //    try {
      //       this.page += 1
      //       // this.isPostLoading = true // переделка в бесконечный список
      //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      //          params: {
      //          _page: this.page,
      //          _limit: this.limit
      //          }
      //       });
      //       this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      //       this.posts = [...this.posts, ...response.data];
      //    } catch (e) {
      //       alert('Ошибка получения данных')
      //    } finally {
      //       // this.isPostLoading = false //  переделка в бесконечный список
      //    }
      // }
   },
   mounted() {
      this.fetchPosts();   //закоментированый ниже код перенесен в пользовательскую директиву VIntersection
      // const options = {
      //    //root: document.querySelector("#scrollArea"), не испотльзуем
      //    rootMargin: "0px",
      //    threshold: 1.0,
      // };
      // const callback = (entries, observer) => {
      //    if (entries[0].isIntersecting && this.page < this.totalPages ) {
      //       this.loadMorePosts()
      //    }
      // };
      // const observer = new IntersectionObserver(callback, options);
      //       observer.observe(this.$refs.observer);
         },
   watch: {
      // page() {  // переделка в бесконечный список
      //    this.fetchPosts();
      // }
   },
   computed: {  // Vuex
      // sortedPosts() {
      //    return [...this.posts].sort((post1, post2) => {
      //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      //    })
      // },
      // sortedAndSearchedPosts() {
      //    return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      // }
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
         sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
      }), 
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