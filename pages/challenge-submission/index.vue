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
    <section id="h4c-2018-schedule" class="container mt-5">
      <iframe scrolling="auto" src="https://docs.google.com/forms/d/e/1FAIpQLSdXT7EXlF0AFTuQfykSGK1QM6l8F8n125yw9vyaXKXX6ESL3Q/viewform?usp=pp_url" />
    </section>
    <hack-footer />
  </main>
</template>

<script>
import HackHeader from "@/components/HackHeader"
import HackFooter from "@/components/Footer"

export default {
    components: {
        HackHeader,
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
