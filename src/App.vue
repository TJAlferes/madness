<template>
  <div id="app">

    <header id="header">
      <div id="title">
        <router-link id="title-link" to="/" exact>
          MADNESS: THE GATHERING
        </router-link>
      </div>
      <nav id="nav">
        <router-link class="nav-link" v-if="!isSignedIn" to="/signup">
          Sign Up
        </router-link>
        <router-link class="nav-link" v-if="!isSignedIn" to="/signin">
          Sign In
        </router-link>
        <router-link class="nav-link" v-if="isSignedIn" to="/settings/:user">
          Settings
        </router-link>
        <router-link class="nav-link" v-if="isSignedIn" to="/profile/:user">
          Profile
        </router-link>
        <span class="nav-link" v-if="isSignedIn">
          Sign Out
        </span>
      </nav>
    </header>

    <main id="main">
      <router-view class="view"></router-view>
    </main>

    <footer id="footer">
      <router-link id="logo-link" to="/" exact>
        <img id="logo-image" src="../public/images/vortex.png" alt="logo">
      </router-link>
    </footer>

  </div>
</template>

<script>
export default {

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  background-color: #000;
}

#app {
  margin: 0 auto;
}

#header {
  margin: 0 auto;
  padding: 8px;
  background-color: #000;
  color: #5ff948;
  font-family: 'Geostar Fill', cursive;
}

#title-link {
  text-decoration: none;
}

#title-link:hover,
#title-link:active,
#title-link:visited {
  color: #5ff948;
}

#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: 50px;
}

.nav-link {
  margin-right: 10px;
  margin-left: 10px;
  font-size: 13px;
  text-decoration: none;
  color: #5ff948;
}

.nav-link:hover {
  color: #1ec503;
}

#main {
  width: 1200px;
  margin: 0 auto;
  background-color: #666;
}

#footer {
  margin: 0 auto;
  padding: 50px;
  background-color: #000;
}

#logo-link,
#logo-image {
  display: block;
  width: 230px;
  margin: 0 auto;
}



/* mobile */
@media (max-width: 599px) {
  #header,
  #main,
  #footer {
    width: 100%;
    min-width: 320px;
  }

  #footer {
    padding: 8px;
  }

  #title-link {
    font-size: 15px;
  }

  #logo-link,
  #logo-image {
    width: 115px;
  }
}

/* tablet (portrait) */
@media (min-width: 600px) {
  #header,
  #main,
  #footer {
    width: 100%;
    min-width: 600px;
  }

  #title-link {
    font-size: 20px;
  }
}

/* tablet (landscape)*/
@media (min-width: 900px) {
  #header {
    width: 100%;
    min-width: 900px;
  }

  #title-link {
    font-size: 25px;
  }
}

/* desktop */
@media (min-width: 1200px) {
  #header,
  #main,
  #footer {
    width: 1200px;
  }

  #header {
    height: 120px;
  }

  #title-link {
    font-size: 30px;
  }
}
</style>