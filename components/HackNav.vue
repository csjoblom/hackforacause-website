<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img src="~/assets/images/tao-circle-40x40.png" title="Technology Association of Oregon" >
      HACK FOR A CAUSE
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
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
