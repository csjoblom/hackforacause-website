# Hack for a Cause Website

> Static Site Generator for Hack for a Cause website. Meant to be used in tandem with Github Pages to host the site.

## Requirements
* NodeJS > 9.0
* Vue-cli (npm i -g vue-cli)

## Dev Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Process for Building Pages

``` bash
# after forking this repo, clone the new repo
$ git clone <newrepo>
$ cd <project_directory>

# install dependencies
$ npm install # or yarn install

# do all your code edity stuff with that sweet nuxt
$ npm run dev

# lint/lintfix your code dummy
$ npm run lint
$ npm run lintfix

# if you want to just build and deploy you can do so (saves you some typing)
$ npm run pushlive

# At this point the gh-pages branch on your repo should be updated with the newly generated pages.
```

## Process for Updating Live Pages
* Once you have deployed the pages to your own repo and everything is green, create a pull request for the gh-pages branch to merge with the live gh-pages repo branch.

## Using Nuxt
* For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
