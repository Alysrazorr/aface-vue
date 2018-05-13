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
  &:hover {
    background-color: #f6f6f6;
  }
}
</style>
