<template lang="pug">
  .direction
    img.direction__img(
      :src="direction.imageUrl"
    )
    h5.direction__title {{ direction.title }}
    p.direction__text {{ direction.text }}
</template>

<script>
export default {
  name: "Direction",
  props: ['direction']
}
</script>