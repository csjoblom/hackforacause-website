<template>
  <main id="h4c-code-of-conduct-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">Event Code of Conduct</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-code-of-conduct" class="container">
      <p class="lead">Exhibitors, speakers, sponsors, staff and all other attendees at events organized by the Technology Association of Oregon (TAO) (Leadership exchange events, forum meetings and events, training classes, and digital mediums) are subject to this Code of Conduct. We are dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity or expression, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of participants in any form.</p>
      <p class="lead">We ask you to be considerate, respectful and value each other’s ideas, styles and viewpoints.</p>
      <p class="lead">Be inclusive and help new perspectives be heard. behave professionally and respectfully to all other participants. Participants violating these rules may be sanctioned or expelled from the event without a refund at the discretion of the organizers or TAO staff members.</p>
      <p class="lead">Harassment includes offensive verbal comments related to gender, gender identity or expression, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.</p>
      <p class="lead">If a participant engages in harassing behavior, the event organizers may take any action they deem appropriate, including warning the individual or expulsion from the event with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the TAO staff immediately.</p>
      <p class="lead">TAO staff will be happy to help participants address concerns. All reports will be treated as confidential. We strongly encourage you to address your issues privately with any of our staff members who are organizing the event. We encourage you to avoid disclosing information about the incident until the staff has had sufficient time in which to address the situation. Please also keep in mind that public shaming can be counterproductive to building a strong community. We do not condone nor participate in such actions.</p>
      <p class="lead">We value your attendance. If you cannot find a member of the event staff or are not comfortable contacting one of the staff onsite, you can alternatively contact <a href="mailto:lauren.neel@techoregon.org" style="color:#ecbe20;">lauren.neel@techoregon.org</a>. </p>
      <p class="lead">We expect all participants to follow these rules at all event venues and related social events.</p>
      <p class="lead">This document is based on the example from the Geek Feminism wiki, with help from Puppet Labs.</p>
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
