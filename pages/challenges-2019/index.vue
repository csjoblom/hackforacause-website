<template>
  <main id="h4c-challenges-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">2019 Challenges</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-2018-challenges" class="container pb-5">
      <div v-for="(challenge, key) in challenges" :key="key" class="h4c-challenges">
        <div class="h4c-bold h4c-challenge--title" v-html="challenge.title"/>
        <div v-if="challenge.video" class="h4c-fb-video">
          <iframe :src="challenge.video" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"/>
        </div>
        <p v-html="challenge.description"/>
      </div>
    </section>
    <hack-footer/>
  </main>
</template>

<script>
import HackHeader from "@/components/HackHeader"
import HackFooter from "@/components/Footer"
export default {
    components: {
        HackHeader,
        HackFooter
    },
    head() {
        return {
            title: "Hack for a Cause | 2018 Challanges"
        }
    },
    created() {
        this.challenges = [
            {
                title: "Oregon Campaign Trail: Civic engagement for candidates",
                description:
                    "Creating a realistic game that would show people interested in running for office the challenges and opportunities they will encounter.",
                video: ""
            },
            {
                title:
                    "HIV Alliance and ShelterCare: Data collection and storage (combined challenge)",
                description:
                    "It would help us be more efficient if we could use tablets to collect data that could then be imported into a database or spreadsheet. We currently collect the data using paper forms...",
                video: ""
            },
            {
                title:
                    "Oregon Family Support Network: Schedule respite child care",
                description:
                    "We need a way for parents to schedule respite child care using their phone.",
                video: ""
            },
            {
                title:
                    "Lane County and Symantec: Homeless Resource Finder (combined challenge)",
                description:
                    "Homeless Resource Finder application for Lane County"
            },
            {
                title: "City of Eugene: Tools for Community Engagement",
                description:
                    "Explore using beacon technology to send a signal to a City of Eugene project phone application at project sites. Upon passing a project site, the application would show a notification on the app. Upon opening the app, the community member is presented with the project information and can learn more about it.",
                video: ""
            },
            {
                title: "City of Eugene - Parking Services: Urban Pong",
                description:
                    "Challenging our indie gamers to build out the Urban Pong experience by creating new games, the mobile app for android and iOS, and retro style leader board. Initial game expansion ideas are a two player game, closing wall game where lights turnoff to simulate a &quot;wall&quot; moving towards the user, vanishing light ball, and any other ideas using the multi colored LED wifi lights.",
                video: ""
            },
            {
                title:
                    "Carry It Forward: Top 5 donations for specific chronically homeless folks",
                description:
                    "Technology will allow for a setup of a donation portal, in which a few select featured people (chronically homeless) will be able to tell their story and solicit donations for items that will impact them the most.",
                video: ""
            },
            {
                title: "Lane County Government",
                description:
                    "Accurate information on the availability of Internet Service Providers, actual prices paid, and real speeds received.",
                video: ""
            }
        ]
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
.h4c-challenge--title {
    text-transform: capitalize;
}
</style>
