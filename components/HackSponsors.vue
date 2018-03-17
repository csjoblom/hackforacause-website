<template>
  <section>
    <div class="row h4c-sponsors">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="banner in banners" :key= "banner" class="swiper-slide">
            <div class="col">
              <figure class="blocks-gallery-image">
                <img :src="banner">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "HackSponsors",
    data() {
        return {
            banners: [
                "/sponsors/XS-Media-Logo-Horizontal-Lite-Black-e1516088037343.png",
                "/sponsors/UOSignature-STK-3435-CGY11-4C-e1516088359647.jpg",
                "/sponsors/Lane-Workforce-Partnership-e1516088135700.png",
                "/sponsors/idx.png",
                "/sponsors/CBTN-logo-500-e1516088053650.png",
                "/sponsors/SheerID-e1516088070111.png"
            ],
            swiperOption: {
                // some swiper options...
            }
        }
    },
    mounted() {
        setTimeout(() => {
            console.log("banners update")
        }, 3000)
        console.log(
            "This is current swiper instance object",
            this.mySwiper,
            "It will slideTo banners 3"
        )
        // this.mySwiper.slideTo(3, 1000, false)
    }
}
</script>
