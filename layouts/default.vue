<template>
  <div>
    <header role="banner">
      <hack-nav />
    </header>
    <nuxt />
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
