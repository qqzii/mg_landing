<template lang="pug">
  .page__content
    Header
    AboutUs
    Specialty
    ForApplicants
    CallUs
    Cellar
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
  components: {Cellar, Specialty, CallUs, ForApplicants, AboutUs, Header}
}
</script>