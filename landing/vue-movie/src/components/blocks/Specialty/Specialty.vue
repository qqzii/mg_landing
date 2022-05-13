<template lang="pug">
  .specialty(
    :style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/specialty.png')})`}"
  )
    .specialty__top-mask
      .specialty__bottom-mask
        .content
          .specialty__content
            h3.specialty__title Специальности
            .specialty__we-learn
              h5.we-learn__title Чему мы учим?
              p.we-learn__text На выбор абитуриентам три направления
            .specialty__directions
              Direction(
                v-for="direction in directions"
                :direction="direction"
              )
            .specialty__we-learn.specialty__teachers
              h5.we-learn__title Преподавательский состав
              p.we-learn__text.teachers__text Почему мы? Неужели мы учим лучше остальных? Наши преподаватели - люди с реальным опытом разработки. Кроме сухого материала и линейных методических указаний - рассказ о реальном опыте, советы и рекомендации
            Carousel.specialty__carousel
              CarouselSlide.carousel-sliders(
                v-for="slide in slides"
                :key="slide.id"
              )
                .carousel-slider__secondary
                  img.carousel-slider__img(
                    :src="prevSlide(slide.id).imageUrl"
                  )
                  p.carousel-slider__name {{ prevSlide(slide.id).name }}
                  p.carousel-slider__subject {{ prevSlide(slide.id).subject }}
                .carousel-slider__main
                  img.carousel-slider__img(
                    :src="slide.imageUrl"
                  )
                  p.carousel-slider__name {{ slide.name }}
                  p.carousel-slider__subject {{ slide.subject }}
                .carousel-slider__secondary
                  img.carousel-slider__img(
                    :src="nextSlide(slide.id).imageUrl"
                  )
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
        {id: 1, name: 'Азявчиков Илья Вадимович', subject: 'прикладная информатика', imageUrl: '../../../assets/images/teachers/Azyauchikau.jpg'},
        {id: 2, name: 'Морозов Артемий Дмитриевич', subject: 'прикладная математика', imageUrl: '../../../assets/images/teachers/Marozau.png'},
        {id: 3, name: 'Величко Александр Геннадьевич', subject: 'председатель совета директоров', imageUrl: '../../../assets/images/teachers/Velichka.jpg'},
        {id: 4, name: 'Величко Павел Александрович', subject: 'административный директор', imageUrl: '../../../assets/images/teachers/Velichka-jr.jpg'},
        {id: 5, name: 'Прудников Александр Александрович', subject: 'член совета директоров', imageUrl: '../../../assets/images/teachers/Prudnikau.jpg'},
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
          title: 'Web-designe/FrontEnd',
          text: 'направление для тех, кто хочет делать веб-пространство более приятным глазу'
        },
        backend: {
          imageUrl: '../../../assets/images/directions/backend.png',
          title: 'BackEnd',
          text: 'для тех, кому интересна техническая сторона всемирной Паутины'
        },
        datascience: {
          imageUrl: '../../../assets/images/directions/datascience.png',
          title: 'Data Science',
          text: 'курс для любителей математики.  Нацелен на обучение специалистов в сфере Big Data и Machine learning'
        }
      }
    }
  }
}
</script>
