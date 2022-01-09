<template>
  <div class="quote-author" v-if="!isLoading">
    <span class="quote-author__name">{{ name }}</span>
    <span class="quote-author__gender">{{ gender }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "gender", "isLoading"],
};
</script>

<style scoped>
.quote-author__name {
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
}

.quote-author__gender {
  display: block;
  font-size: 14px;
  color: #828282;
}
</style>
