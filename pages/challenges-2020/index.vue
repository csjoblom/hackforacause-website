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
                    "Adoptions Northwest is a small start up adoption agency dedicated to being open to all families and individuals who want to provide a home assistance or financial support to children in foster care.  We compete with very large and established non-profits and currently are not getting enough traction from our web presence. We need to get more interaction from our website and drive donor, participant, and volunteer involvement. We need a better designed website that would drive individuals to action, including strong SEO, and information gathering technology would motivate action and provide information we could use to increase connectivity to the community. This website and information query will allow us to identify and serve those who are searching for our services.",
                video: [ ]
            },
            {
                title:
                    "BRING",
                description:
                    "BBRING's mission is to provide vision, leadership, and tools for living well on the planet we share. BRING relies on donations of good reusable building materials from individuals and businesses from all over Lane County. Because we offer a unique service, our donor (and customer) base stretches to every corner of Lane County, often times requiring donors to travel dozens of miles round trip from their homes to bring us stuff. While we do publish a list of the types of materials we generally accept and sell, our in-take staff reserves the right to refuse a donation if there is any reason that we think it may not be reusable: not the type of thing we take, broken, hazardous to staff, out of style, over supply, etc. There are many reasons we may not accept an item. Our problem arises when a donor has traveled to BRING to donate an item or load and finds out that we are unwilling to accept their donation. This can cause frustration and anger, and resentment of our staff whom are just doing their job which reflects badly on our brand. It may even result in a loss of a donors use of our service, of which we rely on. Additionally, we realize the waste of fuel resources, especially when traveling from further distances.  We would like to solve, or relieve, the problem of a donor traveling to us only to hear that we will not accept their donation. We envision a 'Tinder for Stuff' -- where a donor may access a portal to send us photos of their stuff before actually driving to our site. Our staff could decide ahead of time if the item is something we want. We could create a likelihood we will take this score, and send different types of feedback to the potential donor. This could dramatically decrease the amount of unproductive trips made to BRING, help us educate our donors on the types of things we take and reasons why we do not, and reduce unwanted fuel over-consumption. We are open and flexible to the solution to our problem, but this is one way we know technology could assist us. The power of technology is infinite!",
                video: [ ]
            },
            {
                title:
                    "St. Vincent de Paul Society of Lane County",
                description: "SVdP is Lane County’s largest nonprofit human services organization. The agency helps more than 84,000 individuals and families each year with emergency and homeless services, recycling programs, retail thrift stores, self-sufficiency programming and affordable housing. SVdP has a workforce of nearly 700 employees and lacks a suitable means to deliver consistent and current information about policies, benefits, and other resources to our staff. Many of our employees work remotely and/or lack computer access which  makes information delivery especially challenging.  We are looking for a smart-phone-accessible intranet solution that will offer employees greater access to information and promote employee engagement in a variety of areas.",
                video: [ ]
            },
            {
                title: "City of Eugene",
                description:
                    "The City of Eugene is working on a video game for the 15th Night homeless youth organization that will educate youth and adults about the challenge youth face and resources available in our community. A Mario Cart Video Game tournament was hosted in late 2018 to raise money to develop a choose your own path story and develop the tech for the game. The written story was developed earlier this year.  We partnered with Wordcrafters in Eugene and the Turell Group to run a community competition to develop a choose your own path written story. The story will inform youth (as well as adults) about the life skills and resources to stay off the street and/or how to get of the street. The choose your own path story line will take the reader through the experience of living on the street, learning about community resources and organizations, and options other than the street. The winning entry will be announced at the kickoff of this year's 2020 Hack for a Cause. Hackathon participants will develop the digital version of the choose your own path story for a web based game. The online game will be used in middle school classrooms as an education module that would include a conversation with the 15th Night's Youth Advisory Council. The story and tech will be designed and written so that any community could utilize the game and insert their own specific resources for food, safety, clothing, shelter, etc. For example, Food for Lane County may be our community food resource but the story and tech would contain a placeholder for [food]. This innovative game will add another tool to help the youth in our community.",
                video: [ ]
            },
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
