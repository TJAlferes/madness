<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <router-link to="/" exact>
          <img class="logo" src="public/images/logo.png" alt="logo">
        </router-link>
        <div v-if="isSignedIn = false">
          <router-link to="/">Sign Up</router-link>
          <router-link to="/">Sign In</router-link>
        </div>
        <div v-if="isSignedIn = true">
          <router-link to="/">Settings</router-link>
          <router-link to="/">Profile</router-link>
          <span>Sign Out</span>
        </div>
      </nav>
    </header>
    <router-view class="view"></router-view>
    <footer class="footer">
      <router-link to="/" exact>
        <img class="logo" src="public/images/vortex.png" alt="logo">
      </router-link>
    </footer>
  </div>
</template>
