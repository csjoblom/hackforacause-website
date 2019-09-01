module.exports = {
    css: ["@/assets/scss/hack.scss", "swiper/dist/css/swiper.css"],
    plugins: [
        { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
        { src: "~/plugins/ga.js", ssr: false }
    ],
    /*
  ** Headers of the page
  */
    head: {
        title: "Hack for a Cause",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content:
                    "Join Team &lt;Choose Problem&gt; Create Solution. Hack for a Cause - April 4-6 2020, a philanthropic Hackathon located in Eugene Oregon"
            },
            { hid: `og:locale`, content: "en_US" },
            { hid: `og:site_name`, content: "Hack for a Cause" },
            { hid: `og:title`, content: "Hack for a Cause - Eugene" },
            { hid: `og:url`, content: "" },
            { hid: `og:type`, content: "website" },
            {
                hid: `og:description`,
                content:
                    "Join Team &lt;Choose Problem&gt; Create Solution. Hack for a Cause - April 4-6 2020, a philanthropic Hackathon located in Eugene Oregon"
            },
            { hid: `og:image`, content: "/h4c.jpg" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                type: "text/css",
                href:
                    "https://fonts.googleapis.com/css?family=Share+Tech|Roboto"
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href:
                    "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            }
        ]
    },
    /*
  ** Customize the progress bar color
  */
    loading: { color: "#ECBE20" },
    /*
  ** Mode Configuration
  */
    mode: "spa",
    /*
  ** Build configuration
  */
    build: {
        /*
    ** Run ESLint on save
    */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
