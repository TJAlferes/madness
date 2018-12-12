<template>
  <div id="signup">
    <div id="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="error" v-if="error">
          {{ error }}
        </div>
        <h2>Sign Up</h2>
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
        <div class="input">
          <input
            type="password"
            id="confirm-password"
            autocomplete="off"
            maxlength="128"
            placeholder="Confirm Password"
            v-model="confirmPassword"
          >
        </div>
        <div id="submit">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  computed: {
    error() {
      // make a ref, check here if not focused / blurred
      return this.username.trim().length < 7
      ? 'Please enter a longer username'
      : '';
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
      this.$store.dispatch('signup', formData);
    }
  }
};
</script>

<style>
#signup-form form {
  width: 300px;
  margin: 0 auto;
  padding: 35px;
  background-color: #666;
}

.error {
  min-height: 38px;
  border: 4px inset #999;
  padding-left: 7px;
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 30px;
  color: #a74ac7;
  background-color: #000;
}

.error,
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