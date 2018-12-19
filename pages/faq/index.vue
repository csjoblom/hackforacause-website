<template>
  <main id="h4c-faq-main" role="main">
    <section>
      <hack-header header-class="h4c-header--faq">
        <div class="row align-items-center">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">Frequently Asked Questions</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-faq" class="container">
      <hack-faq/>
    </section>
    <hack-footer/>
  </main>
</template>

<script>
import HackHeader from "~/components/HackHeader"
import HackFaq from "~/components/faq/HackFaq"
import HackFooter from "@/components/Footer"
export default {
    components: {
        HackHeader,
        HackFaq,
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
