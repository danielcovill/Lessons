# Overview
We're going with [Heroku](https://www.heroku.com/) because it has a reasonable free option, is well known, and was recommended by a friend of mine who is a developer. I've picked the ["Dyno - Free" tier](https://www.heroku.com/pricing/estimates/9574841637168e0bae1a98a563f604aab6853020e85e56ffa73a910acc2a5c40) for obvious reasons

# Setting up the repository and hosting
* Create a new repository for the API in Github - if you already have one you can skip this step
    * Use the built in gitignore for node.
    * [Choose a license](https://choosealicense.com/) for your code. I use GPLv3
* There are many ways to get our code up and usable on Heroku. We're going to use [Github integration](https://devcenter.heroku.com/articles/github-integration) to synchronize the code we write with our production environment.


* Follow the instructions on [preparing a codebase for heroku deployment](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)


# Setting up hosting
* [Sign up](https://signup.heroku.com/) to get an account
* Install Heroku CLI by running the following command: `curl https://cli-assets.heroku.com/install.sh | sh`