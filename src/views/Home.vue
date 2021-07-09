<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ title }}</h1>

    <div v-if="showModal">
      <Modal :header="header" :text="text" @close="toggleModal" >
        <template v-slot:links>
          <a href="#">sign now</a>
          <a href="#">more info</a>
        </template>
        <h1>Sign Up!</h1>
        <p>Grab your premium account for a 20% discount!!</p>
      </Modal>
    </div>

    <div v-if="showModalTwo">
      <Modal  @close="toggleModalTwo" >

        <h1>Sign Up for latest new!</h1>
        <p>Update promo codes!!</p>
      </Modal>
    </div>
    <button @click.left="toggleModal">Open Modal</button>
    <button @click.left="toggleModalTwo">News Modal</button>
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
      showModal: false,
      showModalTwo: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs);
      //this.$refs.name.classList.add("active");
      //this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>
