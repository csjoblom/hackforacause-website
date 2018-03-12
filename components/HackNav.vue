<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="~/assets/images/tao-circle-40x40.png" title="Technology Association of Oregon" />
            HACK FOR A CAUSE
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for="(link, key) in links" :key="key">
                    <router-link class="nav-link" :to="link.to" :title="link.title" v-html="link.label"></router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'hack-nav',
    created () {
        this.links = [{
    to: '/hack-for-a-cause-faq',
    label: 'FAQ',
    title: 'Frequently Asked Questions'
}, {
    to: '/schedule',
    label: 'SCHEDULE',
    title: 'Schedule'
}, {
    to: '/participate',
    label: 'PARTICIPATE',
    title: 'Participate'
}]
    }
}
</script>

