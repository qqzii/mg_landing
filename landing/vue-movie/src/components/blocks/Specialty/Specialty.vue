<template lang="pug">
  .specialty(:style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/specialty.png')})`}")
    .specialty__top-mask
      .specialty__bottom-mask
        .content
          .specialty__content
            h3.specialty-call-us__title Специальности
            .specialty__info
              h5.specialty__title Срок обучения после 9 классов - 3 года
              p.specialty__text Обучение по 3 направлениям
            .specialty__directions.directions-media
              Direction(v-for="direction in directions" :direction="direction")
            .specialty__info
              h5.specialty__title Преподаватели
              p.specialty__text В CCCT преподают специалисты с реальным опытом разработки и внедрения, а так же американские спикеры
            VueSlickCarousel.specialty__carousel(v-bind="slickSliderSettings")
              CarouselSlide(:data="slides[0]")
              CarouselSlide(:data="slides[1]")
              CarouselSlide(:data="slides[2]")
              CarouselSlide(:data="slides[3]")
              CarouselSlide(:data="slides[4]")
              CarouselSlide(:data="slides[5]")
              CarouselSlide(:data="slides[6]")
              CarouselSlide(:data="slides[7]")
              CarouselSlide(:data="slides[8]")
              CarouselSlide(:data="slides[9]")
              CarouselSlide(:data="slides[10]")
</template>

<script>
import Direction from "@/components/blocks/Direction/Direction";
import CarouselSlide from "@/components/blocks/Carousel/CarouselSlide";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const SCREEN_WIDTH = {
  widthChangeCarousel: 992
}
export default {
  name: "Specialty",
  components: {CarouselSlide, Direction, VueSlickCarousel},
  data(){
    return {
      screenWidth: window.innerWidth,
      SCREEN_WIDTH,
      slides: [
        {id: 1, name: 'Илья Азявчиков', subject: 'прикладная информатика', imageUrl: '../../../assets/images/teachers/Azyauchikau.jpg'},
        {id: 2, name: 'Артемий Морозов', subject: 'PHP/Python', imageUrl: '../../../assets/images/teachers/Marozau.png'},
        {id: 3, name: 'Егор Петрико', subject: 'UX/UI Design', imageUrl: '../../../assets/images/teachers/petriko.jpg'},
        {id: 4, name: 'Федор Стежко', subject: 'адаптивная верстка', imageUrl: '../../../assets/images/teachers/stejko.jpg'},
        {id: 5, name: 'Александр Бабук', subject: 'английский язык', imageUrl: '../../../assets/images/teachers/babuk.jpg'},
        {id: 6, name: 'Марк Величко', subject: 'высшая математика', imageUrl: '../../../assets/images/teachers/velichko.jpg'},
        {id: 7, name: 'Haqi Al-Ganabi', subject: 'Основы экономики', imageUrl: '../../../assets/images/teachers/haqi.jpg'},
        {id: 8, name: 'Dr. Hui Zhang', subject: 'Основы Data Science', imageUrl: '../../../assets/images/teachers/Hui.jpg'},
        {id: 9, name: 'DR. Gagik Bakhshyan', subject: 'Основы психологии', imageUrl: '../../../assets/images/teachers/Gagik.jpg'},
        {id: 10, name: 'Kaji DahalKaji Dahal', subject: 'Работа с базами данных', imageUrl: '../../../assets/images/teachers/Kaji.jpg'},
        {id: 11, name: 'Suresh Bhattarai', subject: 'Физика', imageUrl: '../../../assets/images/teachers/suressh.jpg'}
      ]
    }
  },
  created () {
    window.addEventListener('resize', this.updateScreenWidth)
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
  computed: {
    slickSliderSettings() {
      return {
        arrows: this.screenWidth >= SCREEN_WIDTH.widthChangeCarousel,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 700,
        slidesToShow: this.screenWidth >= SCREEN_WIDTH.widthChangeCarousel ? 3 : 1,
        slidesToScroll: 1,
        swipeToSlide: true
      }
    },
    directions() {
      return {
        frontend: {
          imageUrl: '../../../assets/images/directions/frontend.png',
          title: 'Web-design/FrontEnd',
          text: [
            'Algorithms',
            'UI/UX Design',
            'Адаптивная верстка (HTML, CSS, JS)',
            'Психология веб-дизайна'
          ]
        },
        backend: {
          imageUrl: '../../../assets/images/directions/backend.png',
          title: 'BackEnd',
          text: [
            'Algorithms',
            'С/С++',
            'PHP/C#/Java',
            'Работа с базами данных (MySQL, MongoDB, PostgreSQL)'
          ]
        },
        datascience: {
          imageUrl: '../../../assets/images/directions/datascience.png',
          title: 'Data Science',
          text: [
            'Algorithms',
            'Высшая математика (математические алгоритмы)',
            'C/C++',
            'Python/R/MATLAB'
          ]
        }
      }
    }
  }
}
</script>