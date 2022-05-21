<template lang="pug">
  .footer(:style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/call-us.png')})`}")
    .footer__mask
      .content
        .footer__content
          h3.footer__title Подать заявку
          .footer__call-us
            p.call-us__text Записаться на консультацию, вступительные экзамены можно по форме или по телефону, EMAIL
            form.call-us__form
              input.form__input(v-model="formName" autocomplete="off" type='text' :class="{'complete-input' : formName}")
              input.form__input(v-model="formEmail" autocomplete="off" type='text' :class="{'complete-input' : formEmail}")
              input.form__input(v-model="formPhone" autocomplete="off" type='text' :class="{'complete-input' : formPhone}")
            button.invite__button(@click="sendData") Заполнить форму
          .footer__contacts
            .contacts__contact
              img.contact__img(:src="`../../../assets/images/phone.png`")
              h4.contact__value +375-29-348-01-83
            .contacts__contact
              img.contact__img(:src="`../../../assets/images/email.png`")
              h4.contact__value itsimpe@gmail.com
</template>

<script>
// import Email from "@/api/Email";
export default {
  name: "CallUs",
  data () {
    return {
      formName: '',
      formEmail: '',
      formPhone: ''
    }
  },
  methods: {
    sendData() {
      console.log(this.formName)
      const params = {
        name: this.formName,
        email: this.formEmail,
        phone: this.formPhone
      }
      this.axios.get('send-mail', {params})
        .then(() => {

          this.formName = ''
          this.formEmail = ''
          this.formPhone = ''
        })
        .catch(() => {})
    }
  }
}
</script>