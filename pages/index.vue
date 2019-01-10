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
            <strong>APRIL 5-7 2019</strong>
          </div>
          <div id="h4c-description">
          <strong>Philanthropic Hackathon</strong></div>
          <div id="h4c-description">
          <strong>Located in Eugene Oregon</strong></div>
          <div id="h4c-description">
          <strong>Hosted by Technology Association of Oregon</strong></div>

          <div class="flexrow h4c--cta">
            <div id="h4c-button">
              <a class="button" target="_blank" href="https://goo.gl/forms/OoPiSFyNTAqtcIYv2">
                SUBMIT A CHALLENGE
              </a>
            </div>
            <div id="h4c-sponsor-link">
              <a id="h4c-sponsor-button"
                 class="button"
                 title="Sponsor Hack for a Cause"
                 href="#sponsor-hack-for-a-cause"
              >BECOME A SPONSOR</a>
            </div>
          </div>
        </div>
      </hack-header>
    </section>
    <hack-sponsors/>
    <hack-challenges-2018/>
    <hack-results-2017/>
    <section id="sponsor-hack-for-a-cause" class="h4c-bg--primary py-5 text-center">
      <p class="lead container py-5">There are a variety of ways to help support the H4C weekend. While fiscal support is greatly appreciated, you can sponsor a meal, donate supplies or send teams of experts to lend a hand.<br>
        Email <a href="mailto:allison.weatherly@techoregon.org" title="Email Allison Weatherly to support Hack for a Cause">allison.weatherly@techoregon.org</a> to find the best way to support this community event</p>
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
