<template lang="pug">
  .info__row
    h4.row__title {{info.title}}
    p.row__text(
      v-if="textIsObject"
    ) {{info.text}}
    .row__text(
      v-else
    )
      .object__text(
        v-for="item in info.text"
      )
        span.list__dot.for-applicants__dot.fa.fa-dot-circle-o
        span {{ item }}
</template>

<script>
export default {
  name: "InfoRow",
  props: ['info'],
  computed: {
    textIsObject() {
      return typeof this.info.text === 'string'
    }
  }
}
</script>