<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <gauth />
  <!-- <GauthCompVue3/> -->
  <br/>
  <vue3GoogleLogin/>
</template>


<script>
// install: npm i vue3-google-oauth2 
// https://console.cloud.google.com/apis/credentials?project=traveladvisor-356516

// reference: 
// https://console.cloud.google.com/apis/credentials?project=traveladvisor-356516
// https://console.cloud.google.com/apis/credentials/oauthclient/1039147683524-c76cq67mibs9ivmu66e9h8f7ffgf2s5s.apps.googleusercontent.com?project=traveladvisor-356516

// npm i vue3-google-login
// https://www.npmjs.com/package/vue3-google-login

// npm i vue3-google-oauth2
// https://www.youtube.com/watch?v=hQ5aqvTEqxU

import gauth from './components/gauthCompo.vue'
import vue3GoogleLogin from './components/vue3GoogleLogin.vue';
export default {
  name: 'App',
  components: {
    gauth,
    // GauthCompVue3
    vue3GoogleLogin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
