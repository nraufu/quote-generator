<template>
  <div class="container">
    <the-header></the-header>

    <div class="quotes-container">
      <quote></quote>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Quote from "./components/quote/Quote.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    Quote,
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
}
</style>
