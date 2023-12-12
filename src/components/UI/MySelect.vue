<template>
   <div class="form-select">
      <h3>Сортировка постов по ... </h3>
      <select class="select" v-model="modelValue" @change="changeOption">
         <option value="" disabled>Выберите из списка</option>
         <option 
            v-for="option in options" 
            :key="option.value"
            :value="option.value"
         >
            {{ option.name }}
         </option>
      </select>      
   </div>
   
</template>

<script>

export default {
   name: 'my-select',
   modelValue: '',
   props: {
      
      options: {
         type: Array,
         default: () => []
      }
   },
   methods: {
      changeOption() {
         this.$emit('update:modelValue', this.modelValue)
         // this.$emit('update:modelValue', event.target.value)
      }
   }
}
</script>

<style>
.form-select {
   display: flex;
   align-items: center;
}

.select {
   margin-left: 10px;
   padding: 5px 0;
   border: solid 2px #597;
}
option {
   font-size: 16px;
}
</style>