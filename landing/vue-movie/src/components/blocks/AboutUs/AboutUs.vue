<template lang="pug">
  .about-us
    .content
      .about-us__title Почему мы?
      InfoRow(v-for="row in infoRows" :info="row")
      .about-us__organizations
        h4.row__title Студенческие организации
        .organizations__description
          p.organizations__text Каждый сможет найти занятие по душе не только во время обучения, но и в свободное время
          .organizations__list(v-for="organization in organizationList")
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
        'Спортивное объединение для тех, кто не привык сидеть на месте'
      ]
    },
    infoRows() {
      return {
        firstRow: {
          title: 'CCCT – колледж по подготовке специалистов в IT-сфере',
          text: [
            {
              id: 1,
              title: 'Передовые образовательные методики',
              tip: 'Преподаем по методикам, разработанными в MIT'
            },
            {
              id: 2,
              title: 'Преподаватели практики',
              tip: 'С реальным опытом разработки и внедрения'
            },
            {
              id: 3,
              title: 'Американский диплом',
              tip: 'При успешной сдаче экзаменов студент получает диплом CCCT'
            },
            {
              id: 4,
              title: 'Очное обучение',
              tip: 'Занятия проходят по адресу: г. Минск, пр-т Независимости 58/40 (ст.м. Площадь Якуба Коласа)'
            }
          ],
          withPopDownMenu: true
        },
        secondRow: {
          title: 'Перспективы наших студентов',
          text: [
            'Гарантированное трудоустройство в европейских и американских компаниях',
            'Стажировки в партнерских компаниях',
            'Формирование собственного портфолио'
          ],
          withPopDownMenu: false
        }
      }
    }
  }
}
</script>