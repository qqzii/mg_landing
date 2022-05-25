<template lang="pug">
  .info__row
    h4.row__title(:class="{'title-text-align_center' : info.titleInCenter}") {{info.title}}
    p.row__text(v-if="textIsString") {{info.text}}
    .row__text(
      :class="{'row-text__button-menu' : info.withPopDownMenu, 'row-text-justify-content_center' : info.titleInCenter}"
      v-if="!textIsString"
    )
      .object__text(
        v-for="text in info.text"
        :key="text.id"
        :class="{'object-text__button-menu': info.withPopDownMenu}"
        @click="toggleButtonAboutUs(text.id)"
      )
        div
          span.list__dot.fa.fa-dot-circle-o(v-if="!info.withPopDownMenu")
          span(v-if="info.withPopDownMenu") {{ text.title }}
          span(v-else) {{ text }}
          span.list__arrow.fa.fa-caret-down(v-if="info.withPopDownMenu")
        .list__pop-down-text_enable(v-for="show in showTogglesAboutUs")
          div(v-show="text.id === show") {{ text.tip }}
</template>

<script>
export default {
  name: "InfoRow",
  props: ['info'],
  data () {
    return {
      showTogglesAboutUs: [],
      showTogglesForApplicants: []
    }
  },
  methods: {
    toggleButtonAboutUs(id) {
      this.showTogglesAboutUs.findIndex(el => id === el) > -1
        ? this.showTogglesAboutUs.splice(this.showTogglesAboutUs.findIndex(el => id === el), 1)
        : this.showTogglesAboutUs.push(id)
    }
  },
  computed: {
    textIsString() {
      return typeof this.info.text === 'string'
    }
  }
}
</script>