<template>
  <main id="h4c-schedule-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">Submit A Challenge</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section class="container mt-5">
      The submission form for 2020 challenges is now closed. Please stay tuned for further announcements about the winning challenges before the event!
    </section>
    <section id="h4c-faq" class="container">
      <submit-faq />
    </section>
    <hack-footer />
  </main>
</template>

<script>
import HackHeader from "@/components/HackHeader"
import SubmitFaq from "~/components/faq/SubmitFaq"
import HackFooter from "@/components/Footer"

export default {
    components: {
        HackHeader,
        SubmitFaq,
        HackFooter
    }
}
</script>

<style scoped>
iframe {
    position: relative;
    overflow: hidden;
    border: none;
    min-width: 100%;
    min-height: 2100px;
}
</style>
<style lang="scss">
#h4c-faq {
    margin-bottom: 5rem;
}
#h4c-header > .row {
    height: 100% !important;
}
.h4c--title {
    font-size: 45px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
}
</style>
