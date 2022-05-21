<template lang="pug">
  .specialty(:style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/specialty.png')})`}")
    .specialty__top-mask
      .specialty__bottom-mask
        .content
          .specialty__content
            h3.specialty__title Специальности
            .specialty__we-learn
              h5.we-learn__title Срок обучения после 9 классов - 3 года
              p.we-learn__text Обучение по 3 направлениям
            .specialty__directions.directions-media
              direction(v-for="direction in directions" :direction="direction")
            .specialty__we-learn.specialty__teachers
              h5.we-learn__title Преподаватели
              p.we-learn__text.teachers__text В CCCT преподают специалисты с реальным опытом разработки и внедрения, а так же американские спикеры
            carousel.specialty__carousel
              carousel-slide.carousel-sliders(v-for="slide in slides" :key="slide.id")
                .carousel-slider__secondary
                  img.carousel-slider__img(:src="prevSlide(slide.id).imageUrl")
                  p.carousel-slider__name {{ prevSlide(slide.id).name }}
                  p.carousel-slider__subject {{ prevSlide(slide.id).subject }}
                .carousel-slider__main
                  img.carousel-slider__img(:src="slide.imageUrl")
                  p.carousel-slider__name {{ slide.name }}
                  p.carousel-slider__subject {{ slide.subject }}
                .carousel-slider__secondary
                  img.carousel-slider__img(:src="nextSlide(slide.id).imageUrl")
                  p.carousel-slider__name {{ nextSlide(slide.id).name }}
                  p.carousel-slider__subject {{ nextSlide(slide.id).subject }}
</template>

<script>
import Direction from "@/components/blocks/Direction/Direction";
import Carousel from "@/components/blocks/Carousel/Carousel";
import CarouselSlide from "@/components/blocks/Carousel/CarouselSlide";
export default {
  name: "Specialty",
  components: {CarouselSlide, Carousel, Direction},
  data(){
    return {
      slides: [
        {id: 1, name: 'Илья Азявчиков', subject: 'прикладная информатика', imageUrl: '../../../assets/images/teachers/Azyauchikau.jpg'},
        {id: 2, name: 'Артемий Морозов', subject: 'PHP/Python', imageUrl: '../../../assets/images/teachers/Marozau.png'},
        {id: 3, name: 'Егор Петрико', subject: 'UX/UI Design', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 4, name: 'Федор Стежко', subject: 'адаптивная верстка', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 5, name: 'Александр Бабук', subject: 'английский язык', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 6, name: 'Марк Величко', subject: 'высшая математика', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 7, name: 'Тест Тест', subject: 'тест', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 8, name: 'Тест Тест', subject: 'тест', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 9, name: 'Тест Тест', subject: 'тест', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 10, name: 'Тест Тест', subject: 'тест', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 11, name: 'Тест Тест', subject: 'тест', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'},
        {id: 12, name: 'Тест Тест', subject: 'тест', imageUrl: '../../../assets/images/teachers/defaultAvatar.jpg'}
      ]
    }
  },
  methods: {
    prevSlide(mainImageId) {
      return mainImageId !== 1 ?
          this.slides.find(slide => slide.id === mainImageId - 1) :
          this.slides[this.slides.length - 1]
    },
    nextSlide(mainImageId) {
      return this.slides.length !== mainImageId ?
          this.slides.find(slide => slide.id === mainImageId + 1) :
          this.slides[0]
    }
  },
  computed: {
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
            'Высшая математика',
            'C/C++',
            'Python/R/MATLAB'
          ]
        }
      }
    }
  }
}
</script>