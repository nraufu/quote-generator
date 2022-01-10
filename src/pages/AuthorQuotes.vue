<template>
  <h3 class="author-name">{{ author }}</h3>

  <div class="author-quotes" :class="{ 'is-loading': isLoading }">
    <base-quote
      v-for="(quote, index) in quotes"
      :key="index"
      :text="quote.quoteText"
    ></base-quote>

    <base-spinner v-if="isLoading"></base-spinner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      quotes: [],
      isLoading: false,
    };
  },
  inheritAttrs: false,
  methods: {
    getQuotes() {
      const authorName = this.$route.params.author;
      this.author = authorName;
      this.isLoading = true;

      this.axios
        .get(
          `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
        )
        .then((response) => {
          this.quotes = response.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  mounted() {
    this.getQuotes();
  },
};
</script>

<style scoped>
.author-name {
  font-size: 36px;
  font-weight: 700;
  margin: 35px auto;
  width: 50%;
}
.author-quotes {
  display: block;
  margin: 70px 0;
}

.author-quotes.is-loading {
  text-align: center;
}
</style>
