# Resolve to Save Lives

This repository houses the source code for the Resolve to Save Lives website.

## Development

We use [Middleman](https://middlemanapp.com/) to build the static pages which are hosted on [GitHub Pages](https://pages.github.com/).

### Install Homebrew and Ruby

First, you need to make sure you have Ruby installed. To do so on Mac OS, we use [Homebrew](https://brew.sh/) to install [rbenv](https://github.com/rbenv/rbenv), which we use to manage Ruby versions. (This saves you from having to run everything with `sudo`!)

```sh
# Install Homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install rbenv and ruby-build
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.6.1
rbenv global 2.6.1
ruby -v

# Make sure bundler is installed
gem install bundler
```

### Set up Middleman

To run the site on your own machine, simply clone the repo, install the packages necessary, and start up a Middleman server.

```sh
# Clone the repository
git clone git@github.com:resolvetosavelives/resolvetosavelives.org.git
cd resolvetosavelives.org

# Install necessary packages
bundle install

# Start up the local Middleman server
middleman server
```

Now you should be able to go to http://localhost:4567 and see the site running locally.

To push code live, just run the following command:

```sh
rake publish
```