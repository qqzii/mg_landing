<template lang="pug">
  .for-applicants
    .content
      .for-applicants__title Абитуриентам
      info-row(v-for="row in infoRows" :info="row")
      h3.for-applicants__subtitle.row__title.subtitle-text-align_center Стоимость
      .for-applicants__direction.directions-media
        direction(v-for="payment in payments" :direction="payment")
</template>

<script>
import InfoRow from "@/components/blocks/InfoRow/InfoRow";
import Direction from "@/components/blocks/Direction/Direction";
export default {
  name: "ForApplicants",
  components: {Direction, InfoRow},
  computed: {
    infoRows() {
      return {
        firstRow: {
          title: 'Алгоритм зачисления',
          text: [
            {
              id: 1,
              title: 'Подать заявку',
              tip: 'Дата окончания приема заявок 01.07.2022. После окончания 9 класса'
            },
            {
              id: 2,
              title: 'Получить консультацию',
              tip: 'После подачи заявки мы с вами свяжемся для консультации по существующим вопросам и пригласим на собеседование для допуска к вступительным экзаменам'
            },
            {
              id: 3,
              title: 'Пройти собеседование',
              tip: 'Собеседование проводится членом приемной комиссии по адресу: г. Минск, пр-т Независимости 58/40 (ст.м. Площадь Якуба Коласа)'
            },
            {
              id: 4,
              title: 'Сдать вступительные экзамены',
              tip: 'Для поступления в CCCT необходимо сдать экзамены по следующим предметам: математика, английский язык, логика и кругозор'
            },
            {
              id: 5,
              title: 'Предоставить необходимые документы',
              tip: 'Необходимо предоставить аттестат об окончании 9/11 класса, справку о состоянии здоровья, анкету для заключения договора, заявление'
            },
            {
              id: 6,
              title: 'Оплатить вступительный взнос',
              tip: 'Оплатить взнос в размере 100 BYN в кассу учреждения или через ЕРИП'
            }
          ],
          withPopDownMenu: true,
          titleInCenter: true,
        }
      }
    },
    payments() {
      return {
        frontend: {
          title: 'Очное после 9 класса',
          text: [
            'Срок обучения - 3 года',
            'Общеобразовательная программа',
            'Американский диплом'
          ],
          price: '300€'
        },
        backend: {
          title: 'Очное после 11 класса',
          text: [
            'Срок обучения - 2 года',
            'Дополнительная практика',
            'Американский диплом'
          ],
          price: '200€'
        },
        datascience: {
          title: 'Заочное',
          text: [
            'Срок обучения - 3 года',
            '6 + 1 сессий',
            'Американский диплом'
          ],
          price: '200€'
        }
      }
    }
  }
}
</script>