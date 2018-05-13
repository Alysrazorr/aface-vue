<template>
  <div class="av-ripple av-ripple-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'av-ripple'
}
</script>

<style lang="scss">
@import '@/assets/aface/variables.scss';
div.av-ripple-container {
  display: inline-block;
}
</style>
