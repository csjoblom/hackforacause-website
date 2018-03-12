<template>
    <div id="h4c-header" :class="computedClassList">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'hack-header',
    props: {
        headerClass: String
    },
    computed: {
        computedClassList: function () {
            return {
                'h4c-header': true,
                [this.headerClass]: this.headerClass
            }
        }
    }
}
</script>

