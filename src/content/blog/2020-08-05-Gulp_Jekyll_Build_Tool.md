---
date: "2020-08-05"
title: "Gulp.js Jekyll Build Tool"
tags: ["JavaScript", "Node.js", "Jekyll", "Static Site Generation"]
---

I was looking for ways to perfrom minification and generally improve the developer experience in Jekyll. Jekyll is a nice and stable static site generator (SSG), but I feel it's lacking in some of the more modern tools such as a hot reloading development server and code splitting/minification. Without moving away to a completely new SSG library, I decided to patch in the missing features with Gulp.js task automation.

---

## The problem to solve

This automation script for Gulp.js was first implemented on my personal blog, but I have used it in a few other static site projects since then.

What I wanted was the following:

- Hot reloading browser: enter `broswer-sync`
- JS/CSS minification: enter `gulp-sass`, `gulp-concat` and `gulp-uglify-es`
- Maintain Jekyll to build content only when HTML or Markdown is changed: enter Node's `child_process` to run `bundle exec jekyll build`

A side note: I use SASS for more complex styles and thefore had to move from Jekyll's built-in support to Node-SASS.

## Updating Jekyll's `_config.yml`

In order to optimize Jekyll's building process, it is prudent to exclude all Node.js/NPM files and source code that will be compiled.

```yml
exclude:
  - package.json
  - package-lock.json
  - node_modules
  - gulpfile.js
  - src
```

## The gulpfile.js

This file assumes the Jekyll conventions for folder structures. Source code is placed in the `src` directory, and compliled code has two locations, one for development in `_site` and one in `assets` which will be used for building `_site` in produciton.

Note I commented out sourcemaps, as I generally do not use them often, but can nonetheless be added if desired. This would need and additional `.pipe` in the `style` and `script` functions.

Example with source maps:

```js
gulp.task("javascript", () => {
  gulp
    .src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
})
```

My `gulpfile`:

```js
const gulp = require("gulp")
const cp = require("child_process")
const del = require("del")
const sass = require("gulp-sass")
// const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer")
const browserSync = require("browser-sync").create()
const concat = require("gulp-concat")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify-es").default

const styleSrc = "./src/sass/**/*.scss"
const jsSrc = "./src/js/**/*.js"

const devStyleDest = "./_site/assets/css/"
const devJsDest = "./_site/assets/js/"

const styleDest = "./assets/css/"
const jsDest = "./assets/js/"

const sassOptions = {
  outputStyle: "compressed",
}

function browserSyncInit(done) {
  browserSync.init({ server: "./_site" })
  done()
}

function browserSyncReload(done) {
  browserSync.reload()
  done()
}

function clean() {
  return del(["./_site/assets/"])
}

function style() {
  return gulp
    .src(styleSrc)
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest(devStyleDest))
    .pipe(gulp.dest(styleDest))
    .pipe(browserSync.stream())
}

function scripts() {
  return gulp
    .src(jsSrc)
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest(devJsDest))
    .pipe(uglify())
    .pipe(gulp.dest(devJsDest))
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream())
}

function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" })
}

function watchFiles() {
  gulp.watch(styleSrc, style)
  gulp.watch(jsSrc, scripts)
  gulp.watch(
    [
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./blog/**/*",
      "./*.html",
    ],
    gulp.series(jekyll, browserSyncReload)
  )
}

const build = gulp.series(clean, gulp.parallel(style, scripts, jekyll))
const watch = gulp.parallel(watchFiles, browserSyncInit)

exports.style = style
exports.scripts = scripts
exports.jekyll = jekyll
exports.clean = clean
exports.build = build
exports.watch = watch
exports.default = watch
```

## Getting Started

Source files, located in the folder `src` are comprised of SASS (`scss` folder) and ES6 JavaScript (`scripts` folder).

Gulp is used for the following:

- Spawn a child process that automates the Jekyll build process to run only for specifc change events.
- Compile SASS (`gulp-sass`) with auto-prefixing (`gulp-autoprefixer`) and then compressed to minified CSS
- JS files are first concanated into a single file then minified with `gulp-ugilfy-es`.

The module `browser-sync` was used for live reloading during development.

### Prerequisites

- A Node.js installation with `npm` capable of running Gulp.
- A Ruby installation capable of running Jekyll.

### Installing

For more information about installing Jekyll and a Ruby development environment see Jekyll's documentation [here](https://jekyllrb.com/docs/installation/).

To install Jekyll initially (assuming Ruby is already present), run:

```shell
gem install jekyll bundler
```

Install the Gulp requirements locally with `npm`:

```shell
npm install
```

For development use these scripts:

```shell
gulp style
gulp scripts
gulp jekyll
gulp clean
gulp build
gulp watch
```

`watch` is the default process, hence just entering `gulp` will run the `watch` script.

`style` will complie the SASS to minifed CSS in the destination folder.

`scripts` will combine and minify the JavaScript scripts and send them to the destination folder

`jekyll` will run a child process that runs the ruby command `bundle exec jekyll build`

`clean` will delete all contents in the destination folder.

`build` will run `clean` first then complie all styles and scripts while sending the data to the destination folder.

`watch` will run a development server, watch the `src` folder and `index.html` for changes, then compile SASS and JavaScript as needed, based on the changes.

## Deployment

If a production build is required, use:

```shell
gulp build
```

Then copy the `_site` folder to the desired destination.

## Libraries Used

- [Jekyll](https://jekyllrb.com/) - A static site generator.
- [Gulp.js](https://gulpjs.com/) - A toolkit for automating painful or time-consuming tasks in your development workflow.
- [Node-SASS](https://github.com/sass/node-sass) - Node-SASS is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
