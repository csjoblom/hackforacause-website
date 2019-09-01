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
          <iframe v-if="typeof challenge.video === 'string'" :src="challenge.video" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"/>
          <iframe
            v-for="(v, k) in challenge.video"
            v-else-if="typeof challenge.video === 'object'"
            :key="k"
            :src="v"
            width="560"
            height="315"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allowFullScreen="true"/>
        </div>
        <p class="h4c-challenge--description" v-html="challenge.description"/>
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
            title: "Hack for a Cause | 2019 Challenges"
        }
    },
    created() {
        this.challenges = [
            {
                title: "Oregon Campaign Trail: Civic engagement for candidates",
                description:
                    "Creating a realistic game that would show people interested in running for office the challenges and opportunities they will encounter.",
                video: [
                    "https://www.youtube.com/embed/0XMC8ReWTRI",
                    "https://www.youtube-nocookie.com/embed/s8A6xO-TpKc"
                ]
            },
            {
                title:
                    "HIV Alliance and Shelter Care: Data collection and storage (combined challenge)",
                description:
                    "Efficient data collection, imported into a database or a spreadsheet.",
                video: [
                    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechoregonswv%2Fvideos%2F303629326982841%2F&show_text=0&width=560",
                    "https://www.youtube.com/embed/GoVUX02RVpg",
                    "https://www.youtube-nocookie.com/embed/Bu46TYSMqQc",
                    "https://www.youtube.com/embed/ndGurVbeuRw",
                    "https://www.youtube-nocookie.com/embed/6VCwBKpLlAs"
                ]
            },
            {
                title:
                    "Lane County and Symantec: Homeless Resource Finder (combined challenge)",
                description: "Homeless Resource Finder for Lane County.",
                video: [
                    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechoregonswv%2Fvideos%2F2276980362551906%2F&show_text=0&width=560",
                    "https://www.youtube.com/embed/DIE3xiq3-jA",
                    "https://www.youtube.com/embed/kjTfkt-djT0",
                    "https://www.youtube.com/embed/KXNdt407gsc"
                ]
            },
            {
                title: "City of Eugene: Tools for Community Engagement",
                description:
                    "Exploring the City of Eugene using beacon technology. Using a mobile application, receive notifications near City of Eugene project sites.",
                video: [
                    "https://www.youtube.com/embed/bb1Rld-Vsl0",
                    "https://www.youtube-nocookie.com/embed/Wa8SeadUHro"
                ]
            },
            {
                title: "City of Eugene - Parking Services: Urban Pong",
                description:
                    "Challenging our indie gamers to build out the Urban Pong experience by creating new games, featuring a retro-style leaderbooard. Two player mobile application using multi-colored LED lights on a wall simulate a light ball on a &quot;wall&quot; moving towards the user.",
                video: [
                    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechoregonswv%2Fvideos%2F831445887214210%2F&show_text=0&width=560",
                    "https://www.youtube-nocookie.com/embed/ESgP5ezwRpw"
                ]
            },
            {
                title:
                    "Carry It Forward: Top 5 donations for specific chronically homeless folks",
                description:
                    "Technology will allow for a setup of a donation portal, in which a few select featured people (chronically homeless) will be able to tell their story and solicit donations for items that will impact them the most.",
                video: [
                    "https://www.youtube.com/embed/1DGw25klxrw",
                    "https://www.youtube-nocookie.com/embed/2-xp3cUGsd0",
                    "https://www.youtube-nocookie.com/embed/TR-jMyrks60"
                ]
            },
            {
                title:
                    "Lane County Government: Speed Up America (Grand Challenge)",
                description: `All are welcome to participate. This is a non-competitive challenge where professionals are doing paired programming with students.
                    This effort uses a single repository and the prize is accomplishment and recognition. The challenge focuses on accurate information on the 
                    availability of Internet Service Providers, actual prices paid, and real speeds received.`,
                video: [
                    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechoregonswv%2Fvideos%2F2283236118613879%2F&show_text=0&width=560",
                    "https://www.youtube-nocookie.com/embed/RICE4_8dSro"
                ]
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
}

.h4c-challenge--description {
    font-size: 16px;
    border-bottom: 3px solid #ecbe20;
    border-top: 3px solid #ecbe20;
    padding: 10px;
}
</style>
