<template>
  <div id="h4c-header" :class="computedClassList">
    <slot />
  </div>
</template>
<script>
export default {
    name: "HackHeader",
    props: {
        headerClass: {
            type: String,
            default: null
        }
    },
    computed: {
        computedClassList: function() {
            return {
                "h4c-header": true,
                [this.headerClass]: this.headerClass
            }
        }
    }
}
</script>
