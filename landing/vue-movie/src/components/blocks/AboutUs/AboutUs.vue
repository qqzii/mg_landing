<template lang="pug">
  .about-us
    .content
      .about-us__title Кто мы?
      InfoRow(
        v-for="row in infoRows"
        :info="row"
        :key="row"
      )
      .about-us__organizations
        h4.row__title Студенческие организации
        .organizations__description
          p.organizations__text В нашем колледже каждый сможет найти себе занятие по душе не только во время обучения, но и в свободное время
          .organizations__list(
            v-for="organization in organizationList"
            :key="organization"
          )
            span.list__dot.fa.fa-dot-circle-o
            span {{ organization }}
</template>

<script>
import InfoRow from "@/components/blocks/InfoRow/InfoRow";
export default {
  name: "AboutUs",
  components: {InfoRow},
  computed: {
    organizationList() {
      return [
        'Студенческий союз для организации досуга и мероприятий',
        'Волонтерское движение для тех, кто хочет помогать другим',
        'Творческая команда для яркого отдыха',
        'Спортивное объединение для тех, кто не привык сидеть на месте',
        'Совет старост для тех, кто хочет быть лидером'
      ]
    },
    infoRows() {
      return {
        firstRow: {
          title: 'ITsimple – академия для начинающих специалистов в сфере информационных технологий',
          text: 'Мы не курсы и не кружок по программированию. Закончив обучение на одном из наших направлений вы получите не только знания и навыки, необходимые специалисту на реальных проектах, но и диплом американского образца об окончании среднего образования'
        },
        secondRow: {
          title: 'Перспективы наших студентов',
          text: 'Те, кто лучше всех покажет себя на дипломной работе и в процессе обучения, получат трудоустроиться (в кампанию спонсоров)'
        }
      }
    }
  }
}
</script>