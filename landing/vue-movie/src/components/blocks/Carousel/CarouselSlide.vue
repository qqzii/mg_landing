<template lang="pug">
  .slide
    img.slide__img(:src="data.imageUrl")
    p.slide__name {{data.name}}
    p.slide__subject {{data.subject}}
</template>

<script>
export default {
  name: "CarouselSlide",
  props: ['data']
}
</script>