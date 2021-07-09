<template>
  <div class="backdrop">
     <div class="modal">
        <p> modal content</p>
     </div>

  </div>

</template>

<script>
export default {
  name: "Modal.vue"
}
</script>

<style scoped>

.modal {
  width: 300px;
  padding: 20px;
  background: antiquewhite;
}

.backdrop {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.53);
  width: 100%;
  height: 100%;
}

</style>
