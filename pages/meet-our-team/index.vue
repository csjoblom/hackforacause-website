<template>
  <main
    id="h4c-schedule-main"
    role="main"
    style="position: relative; z-index: 2;"
  >
    <section id="h4c-steering-committee" class="container py-5">
      <div class="d-flex justify-content-center mb-5">
        <h3 class="h4c--title">Meet Our Team</h3>
      </div>
      <p class="lead text-center text-white">
        The Hack for a Cause Steering Committee brings together local leaders in the technology, non-profit and education sectors to make sure our participants, champions, volunteers, and community have a positive experience and meaningful event.
      </p>
      <div class="row d-flex flex-row">
        <div v-for="(member, key) in committee" :key="key"
             class="p-4 col-sm-12 col-md-6 col-lg-3 col-xl-4 text-center">
          <img
            :src="member.image"
            :alt="member.name"
            class="rounded-circle"
          >
          <br>{{ member.name }}<br>{{ member.title }}<br>{{ member.company }}
        </div>
      </div>
    </section>
    <hack-footer />
  </main>
</template>
<script>
import HackFooter from "@/components/Footer"
export default {
    layout: "dark",
    components: {
        HackFooter
    }
}
</script>
<script>
import HackFooter from "@/components/Footer"
export default {
    layout: "dark",
    components: {
        HackFooter
    },
     created() {
        this.committee = [
            {
                name: "Sylvia Kidder Barry",
                title: "Vice President of Resource Development",
                company: "United Way of Lane County",
                image: require('~/assets/images/sylvia.jpg')
            },
            {
                name: "Mark Davis",
                title: "Founder",
                company: " ",
                image: require('~/assets/images/mark.jpg')
            },
            {
                name: "Adam Epstein",
                title: "Application Support Tech",
                company: "City of Eugene",
                image: require('~/assets/images/adam.jpg')
            },
            {
                name: "Ashley Espinoza",
                title: "Sector Strategy Director",
                company: "Lane Workforce Partnership",
                image: require('~/assets/images/ashley.jpg')
            },
            {
                name: "Nikole Garcia",
                title: "WordPress Engineer",
                company: "X-Team",
                image: require('~/assets/images/nikole.jpg')
            },
            {
                name: "Frankie Gold",
                title: "Technical Staff, Applications Platform",
                company: "VMware",
                image: require('~/assets/images/frankie.jpg')
            },
            {
                name: "Sarah Koski",
                title: "Consultant",
                company: "Creative Nonprofit Partnerships",
                image: require('~/assets/images/sarah.jpg')
            },
            {
                name: "Diego Kourchenko",
                title: "Computer Science Undergraduate",
                company: "Oregon State University",
                image: require('~/assets/images/diego.jpg')
            },
            {
                name: "Bishop Lafer",
                title: "Marketing Developer Analyst",
                company: "IDX, LLC",
                image: require('~/assets/images/bishop.jpg')
            },
            {
                name: "Jess Morris",
                title: "Growth Marketing & Analytics Consultant",
                company: "Mammoth Growth",
                image: require('~/assets/images/jess.jpg')
            },
            {
                name: "Antonio Ortega Jr.",
                title: "Integrations Engineer",
                company: "IDX, LLC",
                image: require('~/assets/images/antonio.jpg')
            },
            {
                name: "Stephen Parac",
                title: "Chief Operations Officer",
                company: "XS Media",
                image: require('~/assets/images/stephen.jpg')
            },
            {
                name: "Cara Snow",
                title: "Chief Community Engagement Officer & Chief of Staff",
                company: "Technology Association of Oregon",
                image: require('~/assets/images/cara.jpg')
            },
            {
                name: "Jared Swezey",
                title: "CTO",
                company: "UpTime Science",
                image: require('~/assets/images/jared.jpg')
            },
            {
                name: "Eric D. Wills",
                title: "Senior Instructor, Computer Science",
                company: "University of Oregon",
                image: require('~/assets/images/ericw.jpg')
            },
        ]
    }
}
</script>
<style lang="scss" scoped>
#h4c-steering-committee {
    max-width: 1024px;
}
.h4c--title {
    color: #e0e0e0;
    font-size: 45px;
    text-transform: uppercase;
}
.h4c--team {
    background-color: #fff;
    @media screen and (min-width: 768px) {
        padding: 1.5rem;
        text-align: center;
    }
}
.navbar .navbar-toggler {
    color: #ecbe20;
    border-color: transparent;
}
.transparent.bg-dark {
    background-color: transparent !important;
}
</style>
