<template>
   <div class="post">
      <div>
         <div><strong>id: </strong> {{ post.id }}</div>
         <div><strong>Название: </strong> {{ post.title }}</div>
         <div><strong>Описание: </strong>{{ post.body }}</div>
      </div>   
      <div class="post__btns">
         <my-button  @click="$router.push(`/posts/${post.id}`)"
         :id="post.id"
         style="margin-right: 10px;">Открыть</my-button>
         <my-button  @click="$emit('remove', post)" >Удалить</my-button>
      </div>
   </div>
</template>

<script>

export default {
   props: {
      post: {
         type: Object,
         requited: true,
      }
   },
   methods: {
   }
}
</script>

<style scoped>
   .post{
      max-width: 1100px;
      border: 2px solid #597;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   div {
      padding: 2px 8px;
      font-size: 18px;
   }
   button {
      border: #597 solid 2px;
      padding: 8px 20px;
      font-size: 16px;
      background: rgb(167, 224, 196);
      border-radius: 8px ;
   }
   .post__btns {
      display: flex;
   }
</style>
