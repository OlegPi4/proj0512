<template>
  <button>
      <slot></slot>  
  </button>
</template>

<script>
export default {
   name: 'my-button'

}
</script>

<style>
   button {
      border: #597 solid 2px;
      padding: 8px 20px;
      letter-spacing: 0.08em;
      font-size: 16px;
      background: rgb(167, 224, 196);
      border-radius: 8px ;
      cursor: pointer;
   }
   button:hover {
      color: #fff;
   } 
</style>