<template>
  <header>
    <button class="random-btn" @click="generateQuote">
      random <span class="material-icons">sync</span>
    </button>
  </header>
</template>

<script>
export default {
  inject: ["generateQuote"],
};
</script>

<style scoped>
.random-btn {
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

.random-btn:active {
  transform: translateY(3px);
}

.random-btn span {
  margin-left: 4px;
}
</style>
