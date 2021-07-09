<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ title }}</h1>

    <div v-if="showModal">
      <Modal :header="header" :text="text" @close="toggleModal" />
    </div>
    <button @click.left="toggleModal">Open Modal</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "/components/HelloWorld.vue";
import Modal from "./components/Modal.vue";



  export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue Cli app",
      list: ["One", "Two", "Three"],
      header: "Sign Up",
      text: "Grab your premium account for a 20% discount!!",
      showModal: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
};
</script>
