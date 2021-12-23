<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Raleway", sans-serif;
  color: #000;
  background: #fff;
  padding: 25px;
  font-weight: 500;
}

.container {
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
