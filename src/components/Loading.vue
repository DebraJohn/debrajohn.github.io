<template>
  <div class="loading">
    <a-icon class="spinning" type="loading" />
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="less" scoped>

.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 50px;
  i {
    display: block;
    margin: auto;
    font-size: 30px;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spinning {
    animation: spin 2s linear infinite;
  }
</style>