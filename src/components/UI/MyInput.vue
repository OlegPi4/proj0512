<template>
   <input type="text" class="input"
   :value="modelValue" @input="updateInput">
</template>

<script>
export default {
   name: 'my-input',
   props: {
      modelValue: [String, Number]
   },
   methods: {
      updateInput(event) {
         this.$emit('update:modelValue', event.target.value)
      }
   }   
}
</script>

<style>
   input {
      display: block;
      width: 600px;
      max-width: 100%;
      padding: 15px 20px;
      margin: 10px 0px;
      border: #597 solid 2px;
      font-size: 16px;
   }
   input::placeholder {
      font-size: 16px;
   }
</style>