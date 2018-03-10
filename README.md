# hackforacause-website

> hackathon website for hack4acause

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

# do all your code edity stuff i dont know, just dont break anything and test it

# generate the ghpages
# NOTE you do not need to create a build, that is for a production server and not for static pages.
$ npm run generate:gh-pages

# deploy new gh-pages to repo (requires ability to push to repo)
$ npm run deploy

# At this point the gh-pages branch on your repo should be updated with the newly generated pages.
```

## Process for Updating Live Pages
* Once you have deployed the pages to your own repo and everything is green, create a pull request for the gh-pages branch to merge with the live gh-pages repo branch.

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
