<template>
  <footer class="py-5 text-center bg-dark">
    <div class="h4c-footer pt-5 pb-3">
      <div id="h4c-twitter" class="h4c-social d-inline mr-5"><a href="https://twitter.com/hashtag/hack4cause?src=hash" target="_blank"><i class="fa fa-twitter fa-3" aria-hidden="true"/></a></div>
      <div id="h4c-fb" class="h4c-social d-inline mr-5"><a href="https://www.facebook.com/events/240524426488909/" target="_blank"><i class="fa fa-facebook fa-3" aria-hidden="true"/></a></div>
      <div id="h4c-insta" class="h4c-social d-inline mr-5"><a href="https://www.instagram.com/explore/tags/hack4cause/?hl=en" target="_blank"><i class="fa fa-instagram fa-3" aria-hidden="true"/></a></div>
      <div id="h4c-email" class="h4c-social d-inline"><a href="mailto:matt.sayre@techoregon.org"><i class="fa fa-envelope fa-2" aria-hidden="true"/></a></div>
    </div>
    <div id="h4c-copyright" class="h4c-social py-2 text-white lead">&copy; Technology Association of Oregon</div>
  </footer>
</template>
<script>
export default {
    name: "HackFooter",
    data() {
        return {
            images: ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5"],
            options: {
                loop: true,
                className: "my-swiper",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 0,
                pagination: {
                    el: ".swiper-pagination",
                    dynamicBullets: true
                }
            }
        }
    },
    methods: {
        getImage: function(image) {
            return `/${image}.jpg`
        }
    }
}
</script>
<style lang="scss" scoped>
.h4c-social a i.fa {
    color: #fff;
}
</style>
