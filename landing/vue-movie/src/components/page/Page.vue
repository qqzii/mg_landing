<template lang="pug">
  .page__content
    header(@scroll='scrollChapter')
    #about-us
    about-us
    #specialty
    specialty
    #for-applicants
    for-applicants
    #call-us
    call-us
    cellar
</template>

<script>
import Header from "@/components/blocks/Header/Header";
import AboutUs from "@/components/blocks/AboutUs/AboutUs";
import ForApplicants from "@/components/blocks/ForApplicants/ForApplicants";
import CallUs from "@/components/blocks/CallUs/CallUs";
import Specialty from "@/components/blocks/Specialty/Specialty";
import Cellar from "@/components/blocks/Cellar/Cellar";
export default {
  name: "Page",
  components: {Cellar, Specialty, CallUs, ForApplicants, AboutUs, Header},
  methods: {
    scrollChapter(data) {
      const el = document.getElementById(data.data.scrollTo);
      el.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>