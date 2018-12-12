<template>
  <div id="signin">
    <div id="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="error" v-if="error">
          {{ error }}
        </div>
        <h2>Sign In</h2>
        <div class="input">
          <input
            type="text"
            id="username"
            autocomplete="off"
            autofocus
            maxlength="20"
            placeholder="Username"
            spellcheck="false"
            v-model="username"
          >
        </div>
        <div class="input">
          <input
            type="password"
            id="password"
            autocomplete="off"
            maxlength="128"
            placeholder="Password"
            v-model="password"
          >
        </div>
        <div id="submit">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit () {
      const formData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch('signin', formData);
    }
  }
};
</script>

<style>
#signin-form form {
  width: 300px;
  margin: 0 auto;
  padding: 35px;
  background-color: #666;
}

h2,
.input {
  margin: 0 auto 21px auto;
}

h2 {
  font-family: 'Geostar Fill', cursive;
}

.input input {
  width: 100%;
  height: 38px;
  outline: none;
  border: 4px inset #999;
  padding-left: 7px;
  background-color: #000;
  color: #666;
}

.input input:focus {
  outline: none;
  color: #ddd;
}

#submit button {
  width: 100%;
  height: 38px;
  outline: none;
  border: 4px solid #5ff948;
  background-color: #000;
  color: #5ff948;
  font-family: 'Geostar Fill', cursive;
  cursor: pointer;
	cursor: hand;
}

#submit button:focus {
  outline: none;
}

#submit button:hover {
  border-color: #1ec503;
  color: #1ec503;
}
</style>