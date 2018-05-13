<template>
  <av-button class="av-button-text">
    <slot></slot>
  </av-button>
</template>

<script>
export default {
  name: 'AvButtonText'
}
</script>

<style lang="scss">
@import '@/assets/aface/variables.scss';
.av-button-text {
  background-color: transparent;
  outline-style: none;
  &:hover {
    background-color: #eee;
  }
}
</style>
