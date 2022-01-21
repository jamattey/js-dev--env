# js-dev-env
A fully functional javascript development environment with automated features for server-side web development in nodejs

## Features

1. VS Code Configurations
2. Package Management
3. Development Web Servers
4. Automation
5. Transpiling
6. Bundling
7. Linting
8. Testing
9. Continuous Integration 
10. HTTP
11. Production Build
12. Automated Deployment

# Code Config
For editor configuration, I used editor_config from the VS Code extension library. The settings described in the .editorconfig file are tailored towards Visual Studio code. 

# Package Management
npm was the package management of choice due to its popularity and wide plugin options

# Development Web Server
I used Express as the web-server due to its highly configurable production grade web server that can be deployed almost anywhere.

To allow my work to be share, I used Vercel against Ngrok so that my laptop does not have to be on for clients to view my work. 

If you are looking for internal options, i suggest you use Localtunnel. 

# Automation
This development server focuses heavily on automation and required a script package that can handle the wide variety of task. NPM Scripts fulfilled that in many ways helping me to automate tests, continous integration, bundling, linting and transpiling

The buildScripts folder builds and tests script modules, which can be automated in the script section of package.json

# Transpilling
Babel was the option of choice for transpilling as it transpiles with the latest features of javascript to enable me to leverage the full javascript ecosystem. 

Babel configurations are stored in the .babelrc file

# Bundling
Bundlers take all your js code and package it into a minified file for a target environment. Webpack is very popular as it easily integrates with an Express configuration

Bundling can make your code a mess in the browser, so use Source Maps to trace the bundled code to the original, so you can easily debug. 

Webpack configurations are stored in the .webpack.config.dev.js file

# Linting
Linting ensures consistency and code quality by detecting programmatic and stylistic errors in development before they get into production. 

ESLint comes with recommended linting configs which can be enabled/disabled as you deem fit. 

Adding ESLint watch keeps track of programming irregularities, which throws warnings and errors as you save your work. 

Linting configurations can be found in the .eslintrc.json file.

# Testing
There are two major tests that need to be discussed. 

Unit Testing - Testing of a single module/function
Integration Testing - Testing a series of modules working together. 

Before Testing You Need To Make a few choices

1. Selecting a testing frame work - I chose Mocha
2. Selecting an assertion Library - I chose Chai because Mocha, unlike other testing frameworks does not come with an assertion library built-in
3. Selecting a helper library - I chose JS DOM because it is an implementation of the browser's DOM, without the need to open an actual browser. 
4. Where to run test - Using JS DOM, allowed me to run tests in Memory, and was faster due to the absence of extra browser configurations
5.  Test Utility - Node
6. Test Frequency -Upon save using an npm script. 

# Integration Test (Continuous Integration)
Integration tests are done to ensure that code performs the same way regardless of the platform. This is usually done with the help of a Continuous Integration (CI) Server. 

For this environment, we used two CI Servers

Travis CI - for MacOs and Linux environments. Configurations can be found in the travis.yml file

Appveyor CI - for Windows environments. Configurations are contained in the appveyor.yml file



