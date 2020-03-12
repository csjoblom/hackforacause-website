<template>
  <main id="h4c-faq-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">
              Cancellation Information and Policies
            </h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-faq" class="container">
      <p>Out of an abundance of concern for you, your families and our community, TAO is going to postpone April's Hack 4 a Cause to be held April 3-5 at Nulia. We encourage everyone to take social distancing seriously and take the necessary precautions for the health and wellness of all.</p>
      <p>We believe in this event and its impact on the community. We also know that this is an important event for students and employers as well as our non-profit partners. We will be rescheduling this event so stay tuned for a new date with the same challenges!</p>
      <p>In the meantime, we will be offering full refunds of both registration and t-shirts. We will get out a communication out soon regarding the new dates. In the meantime, please be safe and well and we appreciate your continued support.</p>
      <p>Warmly,<br>Cara Snow, Technology Association of Oregon<br>and the H4AC Steering Commitee</p>
    </section>
    <hack-footer />
  </main>
</template>

<script>
import HackHeader from "~/components/HackHeader"
import HackFooter from "@/components/Footer"
export default {
    components: {
        HackHeader,
        HackFooter
    }
}
</script>

<style lang="scss">
#h4c-faq {
    margin-bottom: 5rem;
}
#h4c-header > .row {
    height: 100% !important;
}
.h4c--title {
    font-size: 45px;
}
</style>
