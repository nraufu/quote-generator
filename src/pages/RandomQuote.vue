<template>
  <div class="random-quote">
    <base-quote></base-quote>

    <div class="view-more">
      <div class="quote-author">
        <span class="quote-author__name">Bill Gates</span>
        <span class="quote-author__gender">business</span>
      </div>

      <span class="material-icons arrow-icon">arrow_right_alt</span>
    </div>
  </div>
</template>

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
  transition: all 0.5s ease-in-out;
}

.view-more:hover {
  background: #333;
  color: #f2f2f2;
}

.view-more .arrow-icon {
  color: #f2f2f2;
}

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
