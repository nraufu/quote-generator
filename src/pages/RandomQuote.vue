<template>
  <div class="random-quote" v-if="randomQuote">
    <base-quote
      :text="randomQuote.quoteText"
      :isLoading="isLoading"
    ></base-quote>

    <router-link class="view-more" :to="toAuthorQuotes" v-show="!isLoading">
      <author
        :name="randomQuote.quoteAuthor"
        :gender="randomQuote.quoteGenre"
        :isLoading="isLoading"
      ></author>

      <span class="material-icons arrow-icon">arrow_right_alt</span>
    </router-link>
  </div>

  <p v-else>No quote</p>
</template>

<script>
import Author from "./Author.vue";

export default {
  props: ["randomQuote", "isLoading"],
  components: {
    Author,
  },
  computed: {
    toAuthorQuotes() {
      return `/quotes/${this.randomQuote.quoteAuthor}`;
    },
  },
};
</script>

<style scoped>
.random-quote {
  position: relative;
  margin-top: 120px;
  margin-bottom: 100px;
}

.view-more {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin: 0 auto;
  padding: 40px 20px;
  background: transparent;
  color: #4f4f4f;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

.view-more:hover {
  background: #333;
  color: #f2f2f2;
}

.view-more .arrow-icon {
  color: #f2f2f2;
}
</style>
