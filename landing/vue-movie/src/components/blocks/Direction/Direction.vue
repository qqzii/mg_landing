<template lang="pug">
  .direction(:class="{'direction-for-applicants' : direction.price}")
    img.direction__img(v-if="direction.imageUrl" :src="direction.imageUrl")
    h5.direction__title {{ direction.title }}
    .direction__list
      .direction__text(v-for="text in direction.text")
        span.list__dot.fa.fa-dot-circle-o
        span {{ text }}
    p.direction__price(v-if="direction.price") {{ direction.price }}
</template>

<script>
export default {
  name: "Direction",
  props: ['direction']
}
</script>