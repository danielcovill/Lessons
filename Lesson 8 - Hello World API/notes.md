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
