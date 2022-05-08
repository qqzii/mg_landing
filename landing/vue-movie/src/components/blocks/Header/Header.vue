<template lang="pug">
  .header(
    :style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/header.png')})`}"
  )
    .header__mask
      .content
        Cap(
          @scroll='scrollToChapter'
        )
        .header__invite
          h3.invite__title Пройди обучение
          p.invite__text Стань востребованным it специалистом
          p.invite__text получи диплом американского образца
          button.invite__button Оставить заявку
</template>

<script>
import Cap from "@/components/blocks/Header/Cap/Cap";
export default {
  name: "Header",
  components: {Cap},
  methods: {
    scrollToChapter(data) {
      this.$emit('scroll', {
        data
      })
    }
  }
}
</script>