<template lang="pug">
  .cap
    .cap__logo
      h1.logo__title(@click="scroll('top')") ccct
      img.logo__img(:src="`../../../assets/images/ico.png`")
    .cap__link-list(v-if="screenWidth >= SCREEN_WIDTH.widthChangeBurgerToList")
      a.link-list__link(v-for="link in linkList" @click="scroll(link.routeName)") {{link.title}}
    .cap__burger(v-else @click="burgerIsActive = !burgerIsActive")
      span.fa.fa-ellipsis-h(:class="{'color_orange' : burgerIsActive}")
      h5(:class="{'color_orange' : burgerIsActive}") Меню
      transition(
        name="burger"
      )
        .burger__link-list(v-show="burgerIsActive")
          a.burger__link(v-for="link in linkList" @click="scroll(link.routeName)") {{link.title}}
</template>

<script>

const SCREEN_WIDTH = {
  widthChangeBurgerToList: 992
}
export default {
  name: "Cap",
  data () {
    return {
      screenWidth: window.innerWidth,
      burgerIsActive: false,
      SCREEN_WIDTH
    }
  },
  created () {
    window.addEventListener('resize', this.updateScreenWidth)
  },
  computed: {
    linkList() {
      return [
        {title: 'Почему мы', routeName: 'about-us'},
        {title: 'Специальности', routeName: 'specialty'},
        {title: 'Абитуриентам', routeName: 'for-applicants'},
        {title: 'Подать заявку', routeName: 'call-us'},
      ]
    }
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    scroll(route) {
      this.$emit('scroll', {scrollTo: route})
    }
  }
}
</script>