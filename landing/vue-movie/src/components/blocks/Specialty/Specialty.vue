<template lang="pug">
  .specialty(
    :style="{ backgroundImage: `url(${require('@/assets/images/2.png')})`}"
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
                :key="direction"
              )
            .specialty__we-learn.specialty__teachers
              h5.we-learn__title Преподавательский состав
              p.we-learn__text.teachers__text Почему мы? Неужели мы учим лучше остальных? Наши преподаватели - люди с реальным опытом разработки. Кроме сухого материала и линейных методических указаний - рассказ о реальном опыте, советы и рекомендации
            Carousel
              CarouselSlide.carousel-slider(
                v-for="slide in slides"
                :key="slide"
              )
                img(
                  :src="slide"
                  :alt="slide"
                )
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
        'https://picsum.photos/id/230/600/300',
        'https://picsum.photos/id/231/600/300',
        'https://picsum.photos/id/232/600/300',
        'https://picsum.photos/id/233/600/300',
        'https://picsum.photos/id/234/600/300',
        'https://picsum.photos/id/235/600/300',
        'https://picsum.photos/id/236/600/300',
      ]
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

<style>
.app {
  display:flex;
  justify-content: center;
}
.carousel {
  position:relative;
  overflow: hidden;
  width:800px;
  height:500px;
  z-index:10;
}
.btn {
  padding:5px 10px;
  background-color:rgba(0,0,0,0.5);
  border:1px solid transparent;
  margin:5px 10px;
  color:#FFF;
  height:50px;
  width:50px;
  position:absolute;
  margin-top:-25px;
  z-index:2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus{
  outline:none;
}
.btn-next {
  top:50%;
  right:0;
}
.btn-prev {
  top:50%;
  left:0;
}
.carousel-slider {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
.carousel-slider img {
  width:100%;
  height:100%;
}
</style>