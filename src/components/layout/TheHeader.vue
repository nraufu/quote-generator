<template>
  <header>
    <button class="header-btn" v-if="isQuotesPath" @click.prevent="goBack">
      <span class="material-icons"> west </span> Go Back
    </button>

    <button
      class="header-btn"
      @click.prevent="generateQuote"
      v-else-if="!isQuotesPath"
    >
      random <span class="material-icons">sync</span>
    </button>
  </header>
</template>

<script>
export default {
  inject: ["generateQuote"],
  computed: {
    isQuotesPath() {
      return this.$route.path.includes("/quotes");
    },
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.header-btn {
  background: none;
  outline: none;
  border: none;
  color: #4f4f4f;
  font-size: 18px;
  display: flex;
  margin-left: auto;
  cursor: pointer;
  transform: translateY(-1px);
  transition: all 0.5s ease-in;
}

.header-btn:active {
  transform: translateY(3px);
}

.header-btn span {
  margin: 0 4px;
}
</style>
