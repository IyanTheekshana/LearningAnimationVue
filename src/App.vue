<template>
  <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return { dialogIsVisible: false };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
  background: linear-gradient(318deg, #f75600 0%, #c7e25f 50%, #99f19c 100%);
  height: 100vh;
  width: 100%;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #0c0c0c;
  border-radius: 30px;
  background-color: #0c0c0c;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #383838;
  border-color: #383838;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #0c0c0c;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #0c0c0c;
  border-radius: 12px;
}
</style>
