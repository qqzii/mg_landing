<template lang="pug">
  .cap
    .cap__logo
      h1.logo__title itsimple
      img.logo__img(
        :src="`../../../assets/images/ico.png`"
      )
    .cap__link-list
      .link-list__link(
        v-for="link in linkList"
        :key="link"
      ) {{link}}
</template>

<script>
export default {
  name: "Cap",
  computed: {
    linkList() {
      return [
          'Главная',
          'О нас',
          'Специальности',
          'Абитуриентам',
          'Контакты'
      ]
    }
  }
}
</script>