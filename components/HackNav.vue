<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/" @click="handleClick">
      <img src="~/assets/images/tao-circle-40x40.png" title="Technology Association of Oregon">
      HACK FOR A CAUSE
    </router-link>
    <button
      :aria-expanded="expanded"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#h4c-navigation-links"
      aria-controls="h4c-navigation-links"
      aria-label="Toggle navigation"
      @click="expanded = !expanded"
    >
      <span class="navbar-toggler-icon"/>
    </button>
    <div id="h4c-navigation-links" :class="{ 'collapse': true, 'navbar-collapse': true, 'show': expanded }">
      <ul class="navbar-nav ml-auto">
        <li v-for="(link, key) in links" :key="key" class="nav-item">
          <router-link :id="link.id ? link.id : null" :to="link.to" :title="link.title" class="nav-link" @click.native="handleClick" v-html="link.label"/>
        </li>
        <li class="nav-item">
          <a id="h4c-participate"
             class="nav-link"
             href="https://www.eventbrite.com/e/hack-for-a-cause-registration-41925576528"
             title="Participate in Hack for a Cause 2018"
             target="_blank"
          >PARTICIPATE</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
    name: "HackNav",
    data() {
        return {
            expanded: false
        }
    },
    created() {
        /**
         * Navbar links for INTERNAL pages only since they're handled with the <router-link> component.
         * Don't link to external sites here.
         *
         * @todo Shape object to use <a> or <router-link> with the <component :is="tag"> property.
         */
        this.links = [
            {
                to: "/challenges-2018",
                label: "2018 Challenges",
                title: "This year's challenges"
            },
            {
                to: "/faq",
                label: "FAQ",
                title: "Frequently Asked Questions"
            },
            {
                to: "/schedule",
                label: "SCHEDULE",
                title: "Schedule"
            }
        ]
    },
    methods: {
        // Only toggle expansion if it's already expanded.
        handleClick: function() {
            if (this.expanded) {
                this.expanded = false
            }
        }
    }
}
</script>
