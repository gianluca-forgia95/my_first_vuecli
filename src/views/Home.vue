<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click</button>
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "./components/Modal.vue";



  export default {
  name: "App",
    components: {Modal},
  data() {
    return {
      title: "My First Vue Cli app",
      list: ["One", "Two", "Three"],
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>
