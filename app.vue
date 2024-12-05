<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  background-image: url('/auth/auth-bg-img.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
