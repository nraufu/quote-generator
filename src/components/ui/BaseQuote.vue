<template>
  <div class="quote">
    <p>
      “The first rule of any technology used in a business is that automation
      applied to an efficient operation will magnify the efficiency. The second
      is that automation applied to an inefficient operation will magnify the
      inefficiency.”
    </p>
  </div>
</template>

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
}
</style>
