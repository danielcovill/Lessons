# Lesson
We want to build our own API for Uno. At this point we should have an API design document that we're keeping up to date. We'll be building out this system and making some minor changes as we go.

# Set up your development enironment
We'll be developing from a Windows Subsystem for Linux (WSL) environment. WSL allows you to run linux applications inside your windows computer. It's essentially creating an entire virtual computer made entirely of software that runs on your computer. We're doing this because it isolates the development environment, and it's a good opportunity to get used to developing in a *nix environment. Many development shops use macos or linux systems so it'll be good to be familiar with navigating this type of system.

## Set up WSL
Follow the [installation instructions](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on the Microsoft website. 
* Use the manual installation steps 
* Install WSL2 (instead of just WSL) as it's significantly improved. 
* Follow the instructions **very carefully** as there are a lot of instructions that you'll miss if you're not reading carefully.
* In the step where you install Ubuntu, any version should do but I chose to use the 20.04 LTS version. LTS stands for Long Term Support which means you'll have a more stable system for development. 
    * The windows store tries to get you to sign in twice when you're installing Ubuntu. Just keep closing out of those windows. It's not necessary.
* When you launch Ubuntu for the first time, it'll ask you to set up a username/password. Do **not** use the same username and password as you have for your windows install.
* The first commands you should run after setting up your username is `sudo apt update && sudo apt upgrade`
    * sudo: is a command "super user do" which runs the following command as a root (equivalent to administrator on windows) user
    * apt: is a package manager tool that manages your programs and lets you add/remove/update them more easily
    * update: updates information from all possible sources about the packages on your system. What are the latest versions available? What packages have changed? etc.
    * upgrdae: upgrades all the programs (packages) on your system
* When you're ready to quit, type `exit` and the ubuntu window will close

## Configuring WSL instance for development
We'll need to install the applications we've previously run (like NodeJS) on Ubuntu in WSL. Remember, we're running an entirely separate operating system in WSL.
* Run `sudo apt install nodejs`
* Run `sudo apt install npm`

## Setting up Windows Terminal
This part isn't necessary, but it is kind of a nice tool to have. I choose to use it but you don't need to necessarily. Windows terminal is a nicer way of looking at all your command line type applications including the WSL2 install you have, Powershell, cmd, etc. Install from the windows store and play with the settings a bit if you like. The settings can be found with the keyboard shortcut `ctrl + ,`

## Install Koa using node package manager
We'll be using a NodeJS library called [Koa](https://koajs.com/) to support the development of our API. Koa handles the routing and other foundational tasks so that we can just write the API endpoints and the code relevant to our application. 

* On the WSL command line, navigate to the folder that contains your project and run `npm i koa`

# Get started with a simple API endpoint
I'm following the instructions [here](https://codeburst.io/lets-build-a-rest-api-with-koa-js-and-test-with-jest-2634c14394d3) because they seem pretty accurate and straightforward. 
I also found [this link](https://www.digitalocean.com/community/tutorials/how-to-build-a-hello-world-application-with-koa) which is a bit more comprehensive I think.

1. Run `npm init -y` - This creates a package.json file in your project which contains a bunch of information about your project and some info on how to run certain scripts. More information can be found [here](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
1. Create a file named `index.js` in the root of your project. In this file we'll reference the `koa` package and the `router` package and eventually build out our API calls.
1. Set up the package.json file you generated in the first step above. It probably automatically picked up your github repository information, but we're going to need to add a few things.
    1. Description: I just put "uno game api" but you can get as detailed as you want
    1. Run commands: I added an entry in the "scripts" section of the file for "dev" that looks like `"dev": "node index.js"`. TODO
1. Install the `koa` and `@koa/router` packages. Note that these will also update your package.json file in the "dependencies" section. If you recall from previous node work we've done, this is so you can distribute just your code, and let someone else download the packages it depends on separately. This keeps a million copies of the dependencies from following your code around everywhere.
    1. `npm install koa`
    1. `npm install @koa/router`
1. At this point I wanted to get an idea of what a folder structure should look like for a koa app. I found [this link](https://medium.com/swlh/advanced-koa-js-boilerplate-bda90c9abe24) which seems to have a pretty decent rundown. 
    1. The important thing is to keep your project's API related files in a /api subfolder and break your routes down there. This helps with organization and clarity but also because it's standard to have an API be behind a /api/v# type URL. 
    1. Create a `/api` folder into which we put our `index.js` file. Inside that folder we'll create subfolders for each of our routes
    1. Create a `/config` folder, which we leave empty for now, but soon will contain configuration files.
    1. We'll create more folders later but this gets the foundation down.
1. Set up the `index.js` file as described in the instructions above (using `@koa/router` instead of `koa-router` because the latter is the new Koa supported package) and then run `npm run dev`. At this point you should be able to navigate to `127.0.0.1:3000` on your localhost and see that it returns "Hello World" in the body and a 200 response. Hitting any other endpoint gets you a 404, not found response which is something Koa provides as part of the library.
    1. Why do we use `index.js`? This [stackoverflow link](https://stackoverflow.com/questions/21063587/what-is-index-js-used-for-in-node-js-projects) gives a good rundown and an additional link that describes the convention node uses when looking to build modules.

)