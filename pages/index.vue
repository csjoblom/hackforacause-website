<template>
  <main role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div id="h4c-header" class="flexcol">
          <div id="h4c-title-join">
            (JOIN TEAM &lt;CHOOSE PROBLEM&gt; CREATE SOLUTION)
          </div>
          <div class="flexrow">
            <div class="squarebrackets">
              <i id="heart" class="fa fa-heart-o fa-pulse" aria-hidden="true"/>
              <!-- svg from before, here just to keep the :before and : after working -->
              <svg class="heart" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
              </svg>
            </div>
            <div id="h4c-title">
              <p class="h4c-title--inner">HACK FOR A CAUSE</p>
            </div>
          </div>
          <div id="h4c-dates">
            <strong>APRIL 6-8 2018</strong>
          </div>
          <div id="h4c-description">
          <strong>Philanthropic Hackathon</strong></div>
          <div id="h4c-description">
          <strong>Located in Eugene Oregon</strong></div>
          <div id="h4c-description">
          <strong>Hosted by Technology Association of Oregon</strong></div>

          <div class="flexrow">
            <!--<div id="h4c-button"><a class="button" href="https://www.eventbrite.com/e/hack-for-a-cause-tickets-41925576528">COMPETE</a></div>-->
            <div id="h4c-button"><a class="button" href="https://www.eventbrite.com/e/hack-for-a-cause-registration-41925576528">SIGN UP</a></div>
          </div>
        </div>
      </hack-header>
    </section>
    <hack-sponsors/>
    <hack-challenges-2018/>
    <hack-results-2017/>
    <section class="h4c-bg--primary py-5 text-center">
      <p class="lead py-5 m-0">Interested in becoming a sponsor? Email allison.weatherly.@techoregon.org</p>
    </section>
    <hack-footer/>
  </main>
</template>

<script>
import HackHeader from "@/components/HackHeader"
import HackSponsors from "@/components/HackSponsors"
import HackChallenges2018 from "@/components/HackChallenges2018"
import HackResults2017 from "@/components/HackResults2017"
import HackFooter from "@/components/Footer"

export default {
    components: {
        HackHeader,
        HackSponsors,
        HackChallenges2018,
        HackResults2017,
        HackFooter
    }
}
</script>

<style>
</style>
