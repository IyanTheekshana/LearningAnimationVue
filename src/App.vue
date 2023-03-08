<template>
  <div class="container">
    <div class="block" :class="{ animate: animated }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <list-data></list-data>
  </div>
  <!-- <div class="container">
    <Transition name="para">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </Transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div> -->
  <div class="container">
    <Transition
      :css="false"
      @before-enter="beforeEnterMeth"
      @enter="enterMeth"
      @after-enter="afterEnterMeth"
      @before-leave="beforeLeaveMeth"
      @leave="leaveMeth"
      @after-leave="afterLeaveMeth"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
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
import ListData from "./components/ListData.vue";

export default {
  components: {
    ListData,
  },
  data() {
    return {
      dialogIsVisible: false,
      animated: false,
      paraIsVisible: false,
      userVisibility: false,
      enterInterval: null,
      leaveInterval: null,
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
    beforeEnterMeth(el) {
      console.log("before enter event executed");
      console.log(el);
      el.style.opacity = 0;
    },
    enterMeth(el, done) {
      console.log("enter event executed");
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnterMeth(el) {
      console.log("after enter event executed");
      console.log(el);
    },
    beforeLeaveMeth(el) {
      console.log("before leave event executed");
      console.log(el);
      el.style.opacity = 1;
    },
    leaveMeth(el, done) {
      console.log("leave event executed");
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeaveMeth(el) {
      console.log("after leave event executed");
      console.log(el);
      el.style.opacity = 0;
    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
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
  height: 100%;
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
/*
.para-enter-active,
.para-leave-active {
   transition: opacity 0.5s ease;
  animation: slide-scale 0.4s ease-out; 
}*/

/* .para-enter-from,
.para-leave-to {
  opacity: 0;
}  */

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
