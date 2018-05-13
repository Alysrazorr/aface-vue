<template>
  <av-button class="av-text-button">
    <slot></slot>
  </av-button>
</template>

<script>
export default {
  name: 'av-text-button'
}
</script>

<style lang="scss">
@import '@/assets/aface/variables.scss';
.av-text-button {
  background-color: transparent;
  outline-style: none;
  &:hover {
    background-color: #eee;
  }
}
</style>
