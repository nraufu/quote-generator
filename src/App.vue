<template>
  <div class="container">
    <the-header></the-header>
    <router-view :randomQuote="randomQuote"></router-view>
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
  data() {
    return {
      isLoading: false,
      currentPage: 1,
      randomQuote: {},
    };
  },
  methods: {
    generateRandomQuote() {
      this.axios
        .get(
          `https://quote-garden.herokuapp.com/api/v3/quotes?page=${this.currentPage}`
        )
        .then((response) => {
          const { pagination, data } = response.data;
          this.currentPage = pagination.currentPage;

          //generate random page
          const randomPage = Math.floor(Math.random() * pagination.totalPages);
          this.currentPage = randomPage;

          //generate random quote from current page results data
          const randomQuote = data[Math.floor(Math.random() * data.length)];
          this.randomQuote = randomQuote;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  mounted() {
    this.generateRandomQuote();
  },
  provide() {
    return {
      generateQuote: this.generateRandomQuote,
    };
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
