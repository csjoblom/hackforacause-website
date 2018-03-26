<template>
  <main id="h4c-challenges-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">2018 Challenges</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-2018-challenges" class="container">
      <div v-for="(challenge, key) in challenges" :key="key" class="h4c-challenges">
        <div class="h4c-bold" v-html="challenge.title"/>
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
            title: "Hack for a cause | 2018 Challanges"
        }
    },
    created() {
        this.challenges = [
            {
                title: "15th Night",
                description:
                    "15th Night is a community movement supporting the Eugene community to work together to prevent youth from going on to the streets, and quickly getting them off if they do. One challenge to accomplishing this goal is connecting homeless youth with service providers quickly and effectively. Initial web based application was developed as part of 2016 Hack-for-a-Cause, and now we want to expand its capabilities to accommodate a specific need, and to allow for future growth, particularly at a school catchment area level."
            },
            {
                title: "Adventure! Children's Museum",
                description:
                    "We are trying to make it easier for families to apply to social services as well as streamline the referral and reporting process. When families struggle to provide the basic necessities of life, they reach out to local non-profits for food, shelter, classes, and many other resources. Unfortunately, the current system requires families to physically go to each individual location and fill out a separate application with repetitive information. This is a big challenge for families as it requires transportation, child care, time, and money to complete this daunting task. The majority of organizations that offer these services are still using pen and paper forms due to funding limitations. They spend endless hours with hand written intakes, reporting, and follow up with referrals. The results are higher administrative costs, barriers, preventable emergency room visits, and poorer health outcomes for our most vulnerable populations."
            },
            {
                title: "Emerald Compassionate Action Network",
                description:
                    "Our community and many others have been unable to respond effectively to a rapidly increasing cascade of systemic social problems. Multiple groups and organizations are floundering in an overload of disconnected information and even the best collaborations have only been able to produce small-scale solutions. The greatest obstacle is simply a lack of connection and communication among the people with the capacity to help. A well-designed web portal can become an effective social problem-solving network at scale by serving as a networking platform to share action projects that are planned, are being implemented, or have had problems."
            },
            {
                title: "Egan Warming Center",
                description:
                    "We need to be able to get real time guest counts from each site to the shuttle drivers and myself. We also need to be able to message each other about site needs. Then in the morning I need the final guest count at each site. At the end of an activation period I need each site to give me their total unique volunteers, volunteer hours. We need the use to be by invitation and passworded or something that makes it secure."
            },
            {
                title: "Mural Way Finding",
                description:
                    "As a tourist I don’t know where each of the great murals are located in Eugene. I also don’t know the artist or the organizations that supported."
            },
            {
                title: "Parenting Now!",
                description:
                    "Parenting Educators often work off-site (e.g., Florence, Cottage Grove). Currently, they must be in our Eugene office to access attendance rosters, evaluation forms, etc. which may require them to drive in to Eugene to retrieve information, mail their paperwork to be copied and scanned in the office, or email the docs to be entered into a database or shared among co-workers. This is clunky and time-consuming. We need a cloud-based system so they can enter that information from anywhere, streamline their time and improve efficiency."
            },
            {
                title: "QR Donations",
                description:
                    "Fast donation app. QR code for dogooders. Scan to launch app, scan to donate."
            },
            {
                title: "Step Into [AR] Comics",
                description:
                    "We want to provide an opportunity for the creatives in our community to add the &quot;A&quot; to the STEM (science, technology, engineering, and math) model to create a STEAM based interaction in our Parcade parking garage (Willamette Street between 7th and 8th Avenues) with our Step into [Augmented Reality] Comics installation. We want to mimic the Overpark Garage’s Step into [AR] Poetry, Step into [AR] Stories, and Step into [AR] Theatre in the Parcade Garage with images and words that tell a positive story. We will place three (3) augmented reality comic strips on the north stair landings (Hult Center side of the garage) and three (3) on the south stair landings (Saturday and Farmers’ Market side of the garage) to pique the curiosity of the thousands of customers using this garage every month. We have the opportunity to showcase our amazing local digital creative talents to visitors from the coast to the mountains that park in the garage for jury duty, high school graduates at the Hult Center from Churchill to Thurston, and downtown employees and shoppers. The Step into [AR] Comics installation will add to the garages “Parcade Ping Pong” challenge (in development) from the 2016 Hack for a Cause Challenge.We will select up to six (6) comics to display in the Parcade Garage. The comics can be a single scene or up to six panels. Either way, we are open to ideas. Perhaps it’s a dragon that has Rubik’s cube solving scales or a full story comic. We will need a digital image, along with direction on the augmented reality scene that includes music, scene environment, and artistic style. If you can program the scene for augmented reality – bonus points!"
            },
            {
                title: "Trans*Ponder",
                description:
                    "Create an organized resource directory on the Trans*Ponder website with a database backend that will enable a semi-automated process from resource nomination, to information verification, to posting publicly on our website. These resources will include doctors, therapists, surgeons, and other service providers that cater to the trans/gender diverse communities in our local area."
            },
            {
                title: "Waste Prevention",
                description:
                    "In Eugene, we landfill over 40 million pounds of food each year. When this food waste breaks down in a landfill, it contributes to global warming by releasing methane into the atmosphere. Not only that, but when we throw away food, we throw away all the resources that went into growing it. While edible food is going into the trash, one in six Oregonians are food insecure. If we can find a way to capture all our wasted food, we could feed all those who are hungry in our community. Bridging the gap between excess food and people who want it will benefit the community, economy, and environment within our region and beyond."
            },
            {
                title: "White Bird Clinic",
                description:
                    "Lane County needs a thorough, accurate, accessible resource website. With access to the Internet, most people can use Google to search for information. However, finding the right resource isn’t so simple. Let’s say Jane wants to find a counselor.White Bird Clinic has published a comprehensive resource guide called the HELP book since the 1980s. Many agencies use this guide, but the printed format means information is updated only once a year."
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
</style>
