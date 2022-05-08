<template lang="pug">
  .cap
    .cap__logo
      h1.logo__title itsimple
      img.logo__img(
        :src="`../../../assets/images/ico.png`"
      )
    .cap__link-list
      a.link-list__link(
        v-for="link in linkList"
        @click="scroll(link.routeName)"
      ) {{link.title}}
</template>

<script>
export default {
  name: "Cap",
  computed: {
    linkList() {
      return [
        {title: 'О нас', routeName: 'about-us'},
        {title: 'Специальности', routeName: 'specialty'},
        {title: 'Абитуриентам', routeName: 'for-applicants'},
        {title: 'Контакты', routeName: 'call-us'},
      ]
    }
  },
  methods: {
    scroll(route) {
      this.$emit('scroll', {
        scrollTo: route
      })
    }
  }
}
</script>