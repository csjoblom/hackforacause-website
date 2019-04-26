<template>
  <main id="h4c-schedule-main" role="main">
    <section>
      <hack-header header-class="h4c-header--main">
        <div class="row align-items-center mx-0">
          <div class="col text-center">
            <h1 class="h4c--title d-inline">2019 Hack Schedule</h1>
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
                date: "Friday, April 26",
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
                        location: "The Davis"
                    },
                    {
                        event: "Dinner Buffet",
                        time: "5:30 - 7:30",
                        location: "Suite 200"
                    },
                    {
                        event: "Team Formation",
                        time: "5:00 - 6:15",
                        location: "Suite 200"
                    },
                    {
                        event: "Greetings: Matt Sayre",
                        time: "6:15 - 6:20",
                        location: "Suite 200"
                    },
                    {
                        event:
                            "Sponsor Hello: Joe Sventek of University of Oregon",
                        time: "6:20 - 6:25",
                        location: "Suite 200"
                    },
                    {
                        event: "Welcome: TBA",
                        time: "6:25 - 6:35",
                        location: "Suite 200"
                    },
                    {
                        event: "Keynote: Ritzo from Measurement Lab",
                        time: "6:35 - 7:00",
                        location: "Suite 200"
                    },
                    {
                        event: "Challenge Presentation Video",
                        time: "7:00 - 7:20",
                        location: "Suite 200"
                    },
                    {
                        event: "&quot;The Nitty Gritty&quot; Mark Davis",
                        time: "7:20 - 7:30",
                        location: "Suite 200"
                    },
                    {
                        event: "HACK BEGINS!",
                        time: "7:30",
                        location: "Suite 200",
                        options: {
                            class: "text-success"
                        }
                    },
                    {
                        event:
                            "Ryan Olds Breakout &dash; Git, README's, and a little Docker",
                        time: "7:35 - 8:20",
                        location: "Conference Room"
                    },
                    {
                        event: "Snack &amp; Swag Room",
                        time: "9:00 - April 28 @ Noon",
                        location: "Kitchen"
                    }
                ]
            },
            {
                date: "Saturday, April 27",
                events: [
                    {
                        event: "Late Night Giveaways",
                        time: "Midnight",
                        location: "Suite 200"
                    },
                    {
                        event: "Breakfast: IDX Burritos",
                        time: "7:00 am",
                        location: "Kitchen",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Help Desk (mentors)",
                        time: "10:00 am - 2:00 pm",
                        location: "Suite 200"
                    },
                    {
                        event: "Lunch: Sizzle Pie",
                        time: "Noon",
                        location: "Kitchen",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Help Desk (mentors)",
                        time: "4:00 pm - 8:00 pm",
                        location: "Suite 200"
                    },
                    {
                        event: "Dinner",
                        time: "6:00",
                        location: "Kitchen",
                        options: {
                            class: "text-info"
                        }
                    }
                ]
            },
            {
                date: "Sunday, April 28",
                events: [
                    {
                        event: "Late Night Fun",
                        time: "Midnight",
                        location: "Suite 200"
                    },
                    {
                        event: "Breakfast: Voodoo Donuts + Bagels",
                        time: "8:00 am",
                        location: "Kitchen",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Help Desk (mentors)",
                        time: "10:00 am - 2:00 pm",
                        location: "Suite 200"
                    },
                    {
                        event: "HACKING ENDS!",
                        time: "NOON",
                        location: "Suite 200",
                        options: {
                            class: "text-danger"
                        }
                    },
                    {
                        event: "Lunch: Cafe Yumm!",
                        time: "11:00 am - 1:00 pm",
                        location: "Kitchen",
                        options: {
                            class: "text-info"
                        }
                    },
                    {
                        event: "Judge Orientation",
                        time: "11:30 - Noon",
                        location: "TBA"
                    },
                    {
                        event: "Judging",
                        time: "12:00 - 1:00 pm",
                        location: "Suite 200"
                    },
                    {
                        event:
                            "Closing Ceremonies w/ Video Presentations/XS Media",
                        time: "1:00 - 2:00pm",
                        location: "Suite 200"
                    },
                    {
                        event: "Awards",
                        time: "2:00 - 3:00",
                        location: "Suite 200"
                    },
                    {
                        event: "Photos &amp; Thank Yous",
                        time: "3:00 - 3:30",
                        location: "Suite 200"
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
