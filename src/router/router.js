import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
//import About from "@/pages/About.vue";
import PostIdPage from  "@/pages/PostIdPage.vue"
import PostPageWithStore from "@/pages/PostPageWithStore.vue"
import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI.vue"

const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/posts',
      component: PostPage
   },
   // {
   //    path: '/about',
   //    component: About
   // },
   {
      path: '/posts/:id',
      component: PostIdPage,
      props: true,
   },
   {
      path: '/store',
      component: PostPageWithStore
   },
   {
      path: '/composition',
      component: PostPageCompositionAPI
      
   }
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router;