<template lang="pug">
  .for-applicants
    .content
      .for-applicants__title Для абитуриентов
      InfoRow(
        v-for="row in infoRows"
        :info="row"
      )
</template>

<script>
import InfoRow from "@/components/blocks/InfoRow/InfoRow";
export default {
  name: "ForApplicants",
  components: {InfoRow},
  computed: {
    infoRows() {
      return {
        firstRow: {
          title: 'Как к нам попасть',
          text: 'Академия базируется в Минске. Запишитесь на вступительные испытания, успешно их пройдите - и добро пожаловать к нам.'
        },
        secondRow: {
          title: 'Вступительная компания включает в себя',
          text: [
            'Экзамен по математике (за 9/11 классов)',
            'Экзамен по английскому языку',
            'Тест на кругозор и логику',
            'Собеседование'
          ]
        },
        thirdRow: {
          title: 'Стоимость',
          text: 'Стоимость можно узнать связавшись с нами'
        }
      }
    }
  }
}
</script>