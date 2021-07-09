<template>
  <div class="backdrop">
     <div class="modal">
      <h1>{{ header }}</h1>
       <p> modal content</p>
    </div>
  </div>

</template>

<script>
export default {
  //name: "Modal.vue"
  props: ["header"],
}
</script>

<style scoped>

.modal {
  width: 300px;
  padding: 20px;
  background: antiquewhite;
  margin: 0 auto;
  border-radius: 18px;
}

.backdrop {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.53);
  width: 100%;
  height: 100%;
}
h1 {
  color: #2c3e50;
}

</style>
