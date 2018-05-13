<template>
  <div class="av-ripple av-ripple-container" @click="ripple($event)">
    <slot></slot><av-ripple-wave v-for="wave in waves" :key="wave.id" :style="wave.styles" @end="clearRipple(wave.id)"/>
  </div>
</template>

<script>
export default {
  name: 'AvRipple',
  data () {
    return {
      waves: []
    }
  },
  methods: {
    getSize () {
      const { offsetWidth, offsetHeight } = this.$el

      return Math.round(Math.max(offsetWidth, offsetHeight))
    },
    ripple ($event) {
      requestAnimationFrame(() => {
        let size = this.getSize() + 'px'
        let position = this.getHitPosition($event, this.getSize())

        this.waves.push({
          id: Math.random(),
          styles: {
            ...position,
            width: size,
            height: size
          }
        })
      })
    },
    clearRipple (id) {
      this.waves = this.waves.filter(wave => wave.id !== id)
    },
    getHitPosition ($event, elementSize) {
      const rect = this.$el.getBoundingClientRect()
      let top = $event.pageY
      let left = $event.pageX

      if ($event.type === 'touchstart') {
        top = $event.changedTouches[0].pageY
        left = $event.changedTouches[0].pageX
      }

      return {
        top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
        left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/aface/mixins.scss';
@import '@/assets/aface/variables.scss';

.av-ripple-container {
  @include not-selectable;

  display: inline-block;
  position: relative;
  overflow: hidden;
}
</style>
