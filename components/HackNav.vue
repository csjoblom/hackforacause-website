<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img src="~/assets/images/tao-circle-40x40.png" title="Technology Association of Oregon">
      HACK FOR A CAUSE
    </a>
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
          <router-link :to="link.to" :title="link.title" class="nav-link" v-html="link.label"/>
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
        this.links = [
            {
                to: "/faq",
                label: "FAQ",
                title: "Frequently Asked Questions"
            },
            {
                to: "/schedule",
                label: "SCHEDULE",
                title: "Schedule"
            },
            {
                to: "/participate",
                label: "PARTICIPATE",
                title: "Participate"
            }
        ]
    }
}
</script>
