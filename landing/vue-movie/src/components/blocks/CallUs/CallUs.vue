<template lang="pug">
  .footer(:style="{ backgroundImage: `url(${require('@/assets/images/backgrounds/call-us.png')})`}")
    .footer__mask
      .content
        .footer__content
          h3.footer__title Подать заявку
          .footer__call-us
            p.call-us__text Записаться на консультацию, вступительные экзамены можно по форме или по телефону, EMAIL
            a.call_us__button(:href="`https://forms.gle/JXvmCF2vz1oANh4L9`") Заполнить форму
          .footer__contacts
            .contacts__contact
              img.contact__img(:src="`../../../assets/images/phone.png`")
              h4.contact__value +375-29-348-01-83
            .contacts__contact
              img(:src="`../../../assets/images/email.png`")
              h4.contact__value itsimpe@gmail.com
</template>

<script>
export default {
  name: "CallUs"
}
</script>