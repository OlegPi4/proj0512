import {ref, onMounted, onUpdated} from 'vue';
import axios from 'axios';


export default function usePosts(limit, page) {
   const posts= ref([])
   const totalPages= ref(0)
   const isPostLoading = ref(true)
   
   //const page = ref(1)
   const fetching = async () => {
      try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
            _page: page,
            _limit: limit
            }
         });
         totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
         posts.value = response.data;
                
      } catch (e) {
         alert('Ошибка получения данных')
      } finally {
         isPostLoading.value = false
      }
   }
   onMounted(fetching)
   // onUpdated(() => {
   //    if (page.value < 10) {
   //       page.value += 1 
   //       fetching
   //    }
   // })
   // onCreated()
   // computed()
   // watch()
   return {
      posts, isPostLoading, totalPages
   }
} 