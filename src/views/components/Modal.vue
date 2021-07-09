<template>
  <div class="backdrop" >
    <div class="modal">
      <div class="cross-modal">
        <i @click.self="closeModal" class="fas fa-times"></i>
      </div>
      <slot></slot>
      <div class="actions">
         <slot name="links"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  //name: "Modal.vue"
  props: [],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  width: 300px;
  padding: 20px;
  background: antiquewhite;
  margin: 100px auto;
  border-radius: 18px;
  position: relative;
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

.cross-modal {
  position: absolute;
  right: 10px;
  top: 10px;
}
.cross-modal i {
  cursor: pointer;
}

.actions a {
  padding: 10px;
}

</style>
