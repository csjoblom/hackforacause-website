<template>
  <main id="h4c-schedule-main" role="main" style="position: relative; z-index: 2;">
    <section id="h4c-steering-committee" class="container py-5">
      <div class="d-flex justify-content-center mb-5">
        <h3 class="h4c--title">Meet Our Team</h3>
      </div>
      <p class="lead text-center text-white">
        Special thanks to Aaron Martins, Antonio Ortega Jr, Ashley Espinoza, Chris Sjoblom, Diego Kourchenko, Eric Hadley, Eric Wills,
        Jeff Petry, Lauren Neel, Lee Ralls, Mark Davis, Matt Sayre, Shelly Galvin, Stephen Parac &amp; Sylvia Barry
      </p>
      <div class="h4c--team">
        <img
          src="~/assets/images/h4c-steering-committee.jpg"
          alt="Hack for a Cause Steering Committee"
          class="img-fluid"
        >
      </div>
    </section>
    <hack-footer/>
  </main>
</template>
<script>
import HackFooter from "@/components/Footer"
export default {
    layout: "dark",
    components: {
        HackFooter
    }
}
</script>
<style lang="scss" scoped>
#h4c-steering-committee {
    max-width: 1024px;
}
.h4c--title {
    color: #e0e0e0;
    font-size: 45px;
    text-transform: uppercase;
}
.h4c--team {
    background-color: #fff;
    @media screen and (min-width: 768px) {
        padding: 1.5rem;
        text-align: center;
    }
}
.navbar .navbar-toggler {
    color: #ecbe20;
    border-color: transparent;
}
.transparent.bg-dark {
    background-color: transparent !important;
}
</style>
