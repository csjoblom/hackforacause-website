<template>
  <main id="h4c-schedule-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">2020 Hack Schedule</h1>
          </div>
        </div>
      </hack-header>
    </section>
    <section id="h4c-2018-schedule" class="container mt-5">
      <div class="table-responsive">
        <table class="table table-sm">
          <thead class="thead-dark">
            <th v-for="(val, key) in [ 'Date', 'Event', 'Time', 'Location' ]" :key="key" v-html="val"/>
          </thead>
          <tbody v-for="(item, key) in schedule" :key="key">
            <tr v-for="(events, k) in item.events" :key="k">
              <td class="font-weight-bold" v-html="k === 0 ? item.date : ''"/>
              <td v-for="(e, i) in events" v-if="typeof e === 'string'" :key="i" :class="events.options ? events.options['class'] : null" v-html="e"/>
            </tr>
          </tbody>
        </table>
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
    created() {
        this.schedule = [
            {
                date: "Friday, April 4",
                events: [
                    {
                        event: "TBA",
                        time: "TBA",
                        location: "TBA"
                    }
                ]
            },
            {
                date: "Saturday, April 5",
                events: [
                    {
                        event: "TBA",
                        time: "TBA",
                        location: "TBA"
                    }
                ]
            },
            {
                date: "Sunday, April 6",
                events: [
                    {
                        event: "TBA",
                        time: "TBA",
                        location: "TBA"
                    }
                ]
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

    @media (max-width: 600px) {
        font-size: 35px;
    }
}
</style>
