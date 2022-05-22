<template lang="pug">
  .header(:style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/header.png')})`}")
    .header__mask
      .content
        Cap(@scroll='scrollToChapter' v-on:scroll="handleScroll" :class="{'background-color__o' : backgroundCap}")
        div(ref="header")
          h3.invite__title Cambridge College of Computer Technology
          p.invite__text совместно с ЧУО "Мужская гимназия" объявляет ограниченный набор абитуриентов на 2022/23 учебный год
          p.invite__text.mt-20 После 9 классов на специальности: Web-Design/FrontEnd, BackEnd, Data Science
          p.invite__text.invite__subtext
            span.fa.fa-graduation-cap.invite__subtext  Выдаем американский диплом
          button.invite__button Подать заявку
</template>

<script>
import Cap from "@/components/blocks/Header/Cap/Cap";
export default {
  name: "Header",
  components: {Cap},
  data () {
    return {
      headerPosition: 220
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.headerPosition = this.$refs.header.getBoundingClientRect().y
    },
    scrollToChapter(data) {
      this.$emit('scroll', {data})
    }
  },
  computed: {
    backgroundCap() {
      return this.headerPosition < 150
    }
  }
}
</script>