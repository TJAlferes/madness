<template>
  <div id="users">
    <ul>
      <li v-for="user of users" v-bind:key="user.user_id">
        <router-link to="/user/:user.user_id">{{ user.username }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: {
    users: [
      {user_id: 1, username: 'tjalferes'},
      {user_id: 2, username: 'ZephoN'},
      {user_id: 3, username: 'spaceplacenta'}
    ]
  }
};
</script>

<style>

</style>