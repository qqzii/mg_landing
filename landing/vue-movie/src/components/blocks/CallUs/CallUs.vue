<template lang="pug">
  .footer(:style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/call-us.png')})`}")
    .footer__mask
      .content
        .footer__content
          h3.specialty-call-us__title Подать заявку
          .footer__call-us
            p.call-us__text Записаться на консультацию
            //form.call-us__form
            //  input.form__input(
            //    v-model="formName"
            //    autocomplete="off"
            //    type='text'
            //    placeholder="Ваше имя"
            //    :class="{'complete-input' : formName}"
            //  )
            //  input.form__input(
            //    v-model="formPhone"
            //    autocomplete="off"
            //    type='text'
            //    placeholder="Телефон"
            //    :class="{'complete-input' : formPhone}"
            //  )
            //button.invite__button(@click="sendData") Подать заявку
            a.invite__button(href="https://forms.gle/L6xxG79LJ6mkSvjw6") Подать заявку
          .footer__contacts
            .contacts__contact
              img.contact__img(:src="`../../../assets/images/phone.png`")
              a.contact__value(:href="`tel:+375293480183`") +375-29-348-01-83
            .contacts__contact
              img.contact__img(:src="`../../../assets/images/email.png`")
              a.contact__value(:href="`mailto:ccct@m-college.online`") ccct@m-college.online
</template>

<script>
// import Email from "@/api/Email";
export default {
  name: "CallUs",
  data () {
    return {
      formName: '',
      formPhone: ''
    }
  },
  // methods: {
  //   sendData() {
  //     const params = {
  //       name: this.formName,
  //       phone: this.formPhone
  //     }
  //     Email.sendMail(params)
  //       .then(() => {
  //         this.$toasted.success('Заявка отправлена. Ожидайте звонка')
  //         this.formName = ''
  //         this.formPhone = ''
  //       })
  //       .catch(() => {
  //         this.$toasted.error('Произошла ошибка при отправке заявки')
  //       })
  //   }
  // }
}
</script>