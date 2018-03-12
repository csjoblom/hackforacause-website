<template>
    <div>
        <header role="banner">
            <hack-nav></hack-nav>
        </header>
        <nuxt></nuxt>
    </div>
</template>
<script>
import HackNav from '@/components/HackNav'
export default {
    name: 'default-layout',
    components: {
        HackNav
    }
}
</script>

