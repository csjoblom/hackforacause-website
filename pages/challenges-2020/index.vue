<template>
  <main id="h4c-challenges-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">2020 Challenges</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-2018-challenges" class="container">
      <div
        v-for="(challenge, key) in challenges"
        :key="key"
        class="container"
      >
        <div class="row">
          <div class="col-12">
            <div
              class="h4c-bold h4c-challenge--title"
              v-html="challenge.title"
            />
          </div>
        </div>
        <div v-if="challenge.video" class="row">
          <div
            v-for="(v, k) in challenge.video"
            :key="k"
            class="col-xs-12 col-s-12 col-md-6 col-lg-4 col-xl-4"
          >
            <div class="h4c-embed-video">
              <div class="embed-responsive embed-responsive-4by3">
                <iframe
                  :src="v"
                  class="embed-responsive-item"
                  scrolling="no"
                  allowTransparency="true"
                  allowFullScreen="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p
              class="h4c-challenge--description"
              v-html="challenge.description"
            />
          </div>
        </div>
      </div>
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
    },
    head() {
        return {
            title: "Hack for a Cause | 2020 Challenges"
        }
    },
    created() {
        this.challenges = [
            {
                title: "Adoptions Northwest",
                description:
                    "Adoption NW needs to redesign our website to help drive donor, participant, and volunteer involvement. We compete with very large and established non-profits and need a better way to share our mission and encourage participation. This new website and improved method for gathering information will allow us to identify and serve those who are searching for our services.",
                video: [ ]
            },
            {
                title:
                    "BRING",
                description:
                    "BRING relies on donations of good reusable building materials from individuals and businesses from all over Lane County. Our problem arises when a donor has traveled a long distance to donate and finds out that we are unable to accept their donation. This can cause frustration and anger, and resentment towards our staff, and may even result in a loss of a donor’s use of our service. We envision a &quot;Tinder for Stuff&quot;, where a donor may access a portal to send us photos of their stuff ahead of time. Our staff could decide if the item is something we want, provide a &quot;likelihood we will take this&quot; score, and send different types of feedback to the potential donor. This could dramatically decrease the number of unproductive trips made to BRING, help us educate our donors on the types of things we take and reasons why we do not accept items, and reduce unwanted fuel over-consumption.",
                video: [ ]
            },
            {
                title:
                    "St. Vincent de Paul Society of Lane County",
                description: "SVdP has a workforce of nearly 700 employees and lacks a suitable means to deliver consistent and current information about policies, benefits, and other resources to our staff. Many of our employees work remotely and/or lack computer access which makes information delivery especially challenging. We are looking for a smart-phone-accessible intranet solution that will offer employees greater access to information and promote employee engagement in a variety of areas.",
                video: [ ]
            },
            {
                title: "City of Eugene",
                description:
                    "The City of Eugene would like to develop a 15-Night Homeless Youth &quot;Choose Your Own Adventure&quot; video game to educate middle school students about resources available to them prior to choosing the streets or while experiencing homelessness. We ask our 2020 hackathoners to develop the tech for a web-based &quot;choose your own adventure&quot; game where a player is encouraged to find resources over the course of 14 days and prior to their 15th night. ",
                video: [ ]
            },
            {
                title: "Eugene Innovators Group",
                description:
                    "Lane County is home to 3,2178 nonprofit entities with overlapping interests. At the same time, the number of new residents moving into the area is rising. How do we connect nonprofits and city leaders with overlapping interests and also help residents looking for ways to volunteer tap into local challenges? We envision an open-source mobile app that empowers individuals in their communities to find each other and join forces on the aspirations and causes that mean the most to them in their city. We hope to create a white label app for cities/communities to use/customize to plug in their own aspirations, goals, projects, and information.",
                video: [ ]
            },
            {
                title:
                    "Positive Community Kitchen",
                description:
                    "This simple service for our community is incredibly complex on the logistics side. Positive Community Kitchen needs to connect 15+ delivery drivers with a changing 100+ client summary weekly. Can we simplify the back end details to allow maximized time for teams to support our volunteers and clients? We currently utilize a spreadsheet for all coordination of deliveries and dietary communication, but we are not utilizing it to it's fullest capacity. Much of our week is spent manually sorting and producing delivery routes and communicating these details to the volunteer delivery drivers. We suspect that there are functions that we are not familiar with which could reduce error and allow our team to spend more time serving clients and volunteers directly. Our service has increased 30% this year and we need to improve this process to best serve our community!",
                video: [ ]
            }
        ]
    }
}
</script>

<style lang="scss">
.h4c-challenges {
    width: 560px;
}
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
    margin-top: 2em;
    margin-bottom: 0.5em;
}

.h4c-challenge--description {
    font-size: 16px;
    border-bottom: 3px solid #ecbe20;
    border-top: 3px solid #ecbe20;
    padding: 10px;
    margin-top: 0.5em;
    margin-bottom: 2em;
}

.h4c-embed-video {
    padding-top: 20px;
    padding-botom: 20px;
}
</style>
