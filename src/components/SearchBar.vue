<template>
  <label>Choose a Pokemon ID</label>
  <input type="number" id="id_num" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/> 
</template>

<script>
  export default {
    props: ["modelValue"],
    emits: ["update:modelValue"]
  }
</script>
