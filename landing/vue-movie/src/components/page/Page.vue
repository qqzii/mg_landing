<template lang="pug">
  .page__content
    Header
    AboutUs
    Specialty
    ForApplicants
    CallUs
</template>

<script>
import Header from "@/components/blocks/Header/Header";
import AboutUs from "@/components/blocks/AboutUs/AboutUs";
import ForApplicants from "@/components/blocks/ForApplicants/ForApplicants";
import CallUs from "@/components/blocks/CallUs/CallUs";
import Specialty from "@/components/blocks/Specialty/Specialty";
export default {
  name: "Page",
  components: {Specialty, CallUs, ForApplicants, AboutUs, Header}
}
</script>