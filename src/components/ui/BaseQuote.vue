<template>
  <div class="quote" :class="isLoading && 'is-loading'">
    <p v-if="!isLoading">“{{ text }}”</p>
    <div v-if="isLoading" class="w-100">
      <p class="skeleton skeleton-text"></p>
      <p class="skeleton skeleton-text"></p>
      <p class="skeleton skeleton-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "isLoading"],
};
</script>

<style scoped>
.quote {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 90px;
}

.quote p {
  display: inline-block;
  flex: 1;
  font-size: 36px;
  margin-left: 99px;
}

.quote p::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  flex: 0 1 8px;
  width: 8px;
  height: 100%;
  background: #f7df94;
  border-radius: 0;
  transition: all 0.5s cubic-bezier(0.63, 0.42, 0.83, 0.67);
}

.quote.is-loading p::before {
  height: 30%;
  border-radius: 10px;
}
</style>
