<template>
  <main id="h4c-code-of-conduct-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">Code of Conduct</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-code-of-conduct" class="container">
      <p class="lead">All Hackathon attendees must adhere to a code of conduct while on the premises as follows:</p>
      <ul>
        <li>Be considerate and respectful of your fellow humans</li>
        <li>Do not harass, threaten, disrespect, discriminate or otherwise annoy others</li>
        <li>Unwelcome physical contact, sexual attention and disruptive behavior will not be tolerated</li>
      </ul>
      <p class="lead">Breaking the code of conduct may result in being asked to leave.</p>
      <p class="lead">Additionally, smoking is prohibited inside the building.</p>
    </section>
    <hack-footer/>
  </main>
</template>
<script>
import HackHeader from "@/components/HackHeader"
import HackFooter from "@/components/Footer"
export default {
    name: "CodeOfConduct",
    components: {
        HackHeader,
        HackFooter
    }
}
</script>
<style>
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
