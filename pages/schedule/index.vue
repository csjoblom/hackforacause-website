<template>
  <main id="h4c-schedule-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">2018 Hack Schedule</h1>
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
                date: "Friday, April 6",
                events: [
                    {
                        event: "Volunteer Orientation",
                        time: "4:00 - 5:00pm",
                        location: "Main Floor Entrance"
                    },
                    {
                        event: "Registration/Check-in",
                        time: "5:00 - 6:00",
                        location: "Main Floor Entrance"
                    },
                    {
                        event: "VIP/Sponsor Reception",
                        time: "5:00 - 6:00",
                        location: "Ballroom Foyer"
                    },
                    {
                        event: "Team Formation",
                        time: "5:00 - 6:15",
                        location: "Ballroom"
                    },
                    {
                        event: "Greetings: Matt Sayre",
                        time: "6:15 - 6:20",
                        location: "Ballroom"
                    },
                    {
                        event: "Welcome: Lucy Vinis",
                        time: "6:20 - 6:25",
                        location: "Ballroom"
                    },
                    {
                        event: "Sponsor Thank Yous: Allison Weatherly",
                        time: "6:25 - 6:30",
                        location: "Ballroom"
                    },
                    {
                        event: "Keynote: Scott Turnbull",
                        time: "6:30 - 6:45",
                        location: "Ballroom"
                    },
                    {
                        event: "Challenge Presentation Video",
                        time: "6:45 - 7:00",
                        location: "Ballroom"
                    },
                    {
                        event: "&quot;The Nitty Gritty&quot; Mark Davis",
                        time: "7:00 - 7:30",
                        location: "Ballroom"
                    },
                    {
                        event: "HACK BEGINS!",
                        time: "8:00",
                        location: "Ballroom",
                        options: {
                            class: "text-success"
                        }
                    },
                    {
                        event: "Snack &amp; Swag Room",
                        time: "9:00 - April 8 @ Noon",
                        location: "Sunset Room"
                    }
                ]
            },
            {
                date: "Saturday, April 7",
                events: [
                    {
                        event: "Late Night Giveaways",
                        time: "Midnight",
                        location: "Ballroom"
                    },
                    {
                        event: "Breakfast: IDX Burritos",
                        time: "7:00 am",
                        location: "Ballroom",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Help Desk (mentors)",
                        time: "10:00 am - 6:00 pm",
                        location: "Ballroom"
                    },
                    {
                        event: "Comic Workshop with Jan Eliot",
                        time: "10:30 am - 11:30 am",
                        location: "Board Room"
                    },
                    {
                        event: "Lunch: Nacho Bar",
                        time: "Noon",
                        location: "Ballroom",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Comic Workshop with Matt Brundage",
                        time: "2:00 pm - 3:00 pm",
                        location: "Board Room"
                    },
                    {
                        event: "Dinner: Cafe Yumm!",
                        time: "6:00",
                        location: "Ballroom",
                        options: {
                            class: "text-info"
                        }
                    }
                ]
            },
            {
                date: "Sunday, April 8",
                events: [
                    {
                        event: "Late Night Fun",
                        time: "Midnight",
                        location: "Sunset Room"
                    },
                    {
                        event: "Breakfast: Voodoo Donuts + Bagels",
                        time: "8:00 am",
                        location: "Ballroom",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "HACKING ENDS!",
                        time: "NOON",
                        location: "Ballroom",
                        options: {
                            class: "text-danger"
                        }
                    },
                    {
                        event: "Brunch",
                        time: "11:00 - 1:00 pm",
                        location: "Ballroom",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Judge Orientation",
                        time: "11:30 - Noon",
                        location: "AxBilly Grill"
                    },
                    {
                        event: "Judging",
                        time: "12:00 - 1:00 pm",
                        location: "Ballroom"
                    },
                    {
                        event: "Closing Ceremonies",
                        time: "1:00",
                        location: ""
                    },
                    {
                        event: "Presentation / Video Recap",
                        time: "2:00 - 3:00",
                        location: "Ballroom"
                    },
                    {
                        event: "Awards",
                        time: "3:00 - 4:00",
                        location: "Ballroom"
                    },
                    {
                        event: "Photos &amp; Thank Yous",
                        time: "4:00 - 5:00",
                        location: "Ballroom"
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
