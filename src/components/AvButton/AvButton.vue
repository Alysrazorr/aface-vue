<template>
  <av-ripple class="av-button">
    <slot></slot>
  </av-ripple>
</template>

<script>
export default {
  name: 'av-button'
}
</script>

<style lang="scss">
.av-button {
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  padding: 10px;
  background-color: #eee;
  outline-style: none;
}
</style>
