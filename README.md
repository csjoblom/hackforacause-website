# hackforacause-website

> hackathon website for hack4acause

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# build and generate for gh-pages
$ npm run build:gh-pages
$ npm run generate:gh-pages

# deploy to gh-pages
$ npm run deploy
```

## Process for Deploying Pages

``` bash
# install dependencies
$ npm install # or yarn install

# do all your code edity stuff i dont know, just dont break anything and test it

# generate the ghpages
# NOTE you do not need to create a build, that is for a production server and not for static pages.
$ npm run generate:gh-pages

# deploy new gh-pages to repo (requires ability to push to repo)
$ npm run deploy

# At this point the gh-pages branch on your repo should be updated with the newly generated pages.
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
