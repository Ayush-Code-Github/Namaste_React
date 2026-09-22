# NPM- is a standard repository for all the packages , all the utilities ,libraries and packages we can get it by NPM and npm manages it up for us in the projects.
NPM- is a package manager which we will install in our system.
Package.json is a configuration for NPM
packages are also known as dependencies(sometimes and moslty always)
most important package or dependency is bundler(vite,parcel,webpack)
Bunndler- our code need to be minified, optimized , packaged , cleaned before getting pushed to production bundlers are used for this purpose.
npm install -D parcel (here -d is dev dependency which is used at the development phase of app) and other is the normal dependency is also used at the production.
# caret ^ - minor updates in package.json, tilde ~ - will do major updated in package.json, in package.json is recommened to use caret^
package.json - track of approx version of dependencies , package-lock.json - keeps the track of the exact version of dependencies
intigrity- keep a hash to verify that whatever version in on the local machine same code version needs to be deployed to the production(eg working on local but not on production)
Transitive Dependencies- dependencies will have it own dependencies and those dependencies will have their own dependencies.
node-modules - database for all packages collection of all dependencies
.gitignore- if we do not want some files to go on to production, or dont want some files to go on to git (dont push node modules, and surely push package.json and package-lock.json )
if we have package.json and package-lock.json we can just install node modules and all the required ependecies by just doing npm install.
npx - executing packages npm- installing
npx parcel index.html it will go to the source i.e index.html and builds a development build and host that development build on local host 1234.
# REACT @18.2.0
PARCEL @2.8.4

# imports are case sensitive is import React from react , then use React.createElement only not react.createElement it is case sensitive.
also the app.js mention the type= "module" then only it will now it is a react code not browser script

# Parcel
creating
- Dev Build
- local server
- HMR = Hot Module Replacement (real time updation and refreshing when we make any changes in our file and saves it the immidiate updation on the browser is HMR)
- File Watching Algorithm - written in C++
- Caching Faster Builds
- Image Optimization
- Minification (for production)
- Bundling
- Compressing
- consistent Hashing (// read about this)
- code splitting
- Differential Bundling - support for old browser
- Diagnostic (behind the scenes , (also giving beautiful error))
- Error handling (also giving beautiful error)
- give ssl features also https, is we want test our website
- Reliable caching
- Tree Shaking Algorithm - (remove unused code , and optimize it, eg we have 100s of functions and we are just using 4-5 funtions Parcel will tree shake our code and remove the unused code and optimize our app)
different dev and prod bundles and builds

# main - App.js 
we need to remove this and then do npx parcel build index.html (trying to build a prod build) because this main is kind of entry point to our web app and in parcel we are giving entry point like:
- parcel build index.html so it conflicts with the main

# files in dist folder are the one that we see on the browser we do coing on the files we create and under the dist folder all our files are:
- minified , tree shaked , compressed and those files are dev or prod builds 
- these are also temporary folder ands can be regenerated

# prod build 
- npx parcel build index.html

#dev build
- npx parcel index.html

# Local --> GIT --> fetch to server --> End user

# explore browsersList package of npm 