<template>
  <div class="container">
    <div class="block" :class="{ animate: animated }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <Transition name="para">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </Transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <div class="container">
    <Transition name="btn-fade" mode="out-in">
      <button @click="showUsers" v-if="!userVisibility">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </Transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
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
    return {
      dialogIsVisible: false,
      animated: false,
      paraIsVisible: false,
      userVisibility: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animated = !this.animated;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.userVisibility = true;
    },
    hideUsers() {
      this.userVisibility = false;
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
  margin: 2px;
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
  border-radius: 50%;
  /* transition: transform 0.3s; */
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

.animate {
  /* transform: translateX(-100px);
   */
  animation: slide-scale 0.7s;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(-120px) scale(1.1);
  }
  75% {
    transform: translateX(120px) scale(1.5);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}

.para-enter-active,
.para-leave-active {
  /* transition: opacity 0.5s ease;*/
  animation: slide-scale 0.4s ease-out;
}

.para-enter-from,
.para-leave-to {
  opacity: 0;
}

.btn-fade-enter-active,
.btn-fade-leave-active {
  /* transition: opacity 0.5s ease;*/
  animation: opacity 0.2s ease;
}
.btn-fade-enter-from,
.btn-fade-leave-to {
  opacity: 0;
}
</style>
