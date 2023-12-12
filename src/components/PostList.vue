<template>
   <div v-if="posts.length > 0">
      <h3>Список постов</h3>
      <transition-group name="post-list">
         <post-item  
         v-for="post in posts"
         :post="post"
         :key="post.id"
         @remove="$emit('remove', post)" 
      />   
      </transition-group>
   </div>
   <div v-else>
      <h2 class="red">Список постов пуст</h2>
   </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
   components: { PostItem },
   props: {
      posts: Array,
      required: true,
   }
}
</script>

<style scoped>
  h3{
   margin-bottom: 20px;
  }
  .red {
   color: rgb(245, 61, 61);
  }

  .post-list-item {
     display: inline-block;
     margin-right: 10px;
  }
   .post-list-enter-active,
   .post-list-leave-active {
      transition: all 0.6s ease;
   }
   .post-list-enter-from,
   .post-list-leave-to {
      opacity: 0;
      transform: translateX(300px);
   }
   .post-list-move {
  transition: transform 0.8s ease;
}
</style>