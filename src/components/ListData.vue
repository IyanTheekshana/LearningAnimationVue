<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @dblclick="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div class="form-control">
    <label for="element">Add element</label>
    <input type="text" name="element" id="element" v-model="name" />
    <button @click="addUser" :disabled="!name">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "Manu", "June", "Monarca", "Michael"],
      name: "",
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.name);
      this.name = "";
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
  mounted() {
    if (this.users.length > 7) {
      this.users.pop();
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  border: 1px solid #0c0c0c;
  padding: 1rem;
  margin: 2px;
  text-align: center;
  cursor: pointer;
}
.form-control {
  margin: 1rem;
  background: goldenrod;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.form-control input {
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.form-control label {
  font-weight: bold;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 1s ease-out;
}

.user-list-leave-active {
  position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-move {
  transition: transform 0.4s ease-in;
}
</style>
