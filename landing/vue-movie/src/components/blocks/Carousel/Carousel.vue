<template lang="pug">
  .carousel(
    @keydown="checkSlide($event)"
    tabindex="0"
  )
    slot
    .carousel__switchers
      span.fa.fa-angle-left.carousel__button.carousel__button-next(
        @click.prevent="next"
      )
      span.fa.fa-angle-right.carousel__button.carousel__button-prev(
        @click.prevent="prev"
      )
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {
      index : 0,
      slides : [],
      slideDirection: '',
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length
    }
  },
  mounted(){
    this.slides = this.$children
    this.slides.map((slide,index) => {
      slide.index = index
    })
  },
  methods: {
    prev(){
      this.index++
      if(this.index >= this.slidesLength){
        this.index = 0
      }
      this.slideDirection = 'slide-right'
    },
    next(){
      this.index--
      if(this.index < 0){
        this.index = this.slidesLength - 1
      }
      this.slideDirection = 'slide-left'
    },
    checkSlide(event){
      if(event.keyCode === 39){
        this.next()
      }else if (event.keyCode === 37){
        this.prev()
      } else {
        return 0
      }
    }
  }
}
</script>