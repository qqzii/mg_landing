<template lang="pug">
  transition(
    :name="dir"
  )
    div(
      v-show="visible"
    )
      slot
</template>

<script>
export default {
  name: "CarouselSlide",
  data() {
    return {
      index  : 0,
    }
  },
  computed : {
    visible() {
      return this.index === this.$parent.index;
    },
    dir() {
      return this.$parent.slideDirection;
    },
  }
}
</script>