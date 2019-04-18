<template>
  <div>
    <header role="banner">
      <div class="header--dark"/>
      <hack-nav v-bind="{ navClass: [ 'navbar-dark', 'navbar-transparent' ] }"/>
    </header>
    <nuxt/>
  </div>
</template>
<script>
import HackNav from "@/components/HackNav"
export default {
    name: "DefaultLayout",
    components: {
        HackNav
    }
}
</script>
<style lang="scss">
.header--dark {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 30em;
    background-color: #1a1a1a;
    &::after {
        content: "";
        background: url("https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini-dark.png");
        opacity: 0.18;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        // z-index: -1;
    }
}
</style>
