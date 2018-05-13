<template>
  <transition name="av-ripple-wave" @after-enter="end">
    <span class="av-ripple-wave" v-if="isActive"></span>
  </transition>
</template>

<script>
export default {
  name: 'AvRippleWave',
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    end () {
      this.isActive = false
      this.$emit('end')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/aface/mixins.scss';
@import '@/assets/aface/variables.scss';

.av-ripple-wave-enter-active {
  opacity: 0 !important;
  transform: scale(2) translateZ(0);
  transition: .8s $av-transition-stand-timing;
  transition-property: opacity, transform;
  will-change: opacity, transform;
}

.av-ripple-wave-enter {
  opacity: .2 !important;
  transform: scale(.2) translateZ(0);
}

.av-ripple-wave {
  position: absolute;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;

  ~ *:not(.av-ripple-wave) {
    position: relative;
    z-index: 2;
  }
}
</style>
