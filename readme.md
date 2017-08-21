# Node Reps! With Disgruntled Avians.

![](https://media.giphy.com/media/fKACOQcJ6LnTa/giphy.gif)

## Setup

Some data has been provided for you in a json file.

## Assignment

#### Part 0 - Before You Start - Think about how you style your code.

* Quite possibly the most important thing you'll need to do as a programmer is write clean, styled code. It doesn't need to work perfectly, or at all, because if you have clean code, then you can easily work with others to resolve your functional issues and others can easily read through your code to provide feedback.
* A few things to focus on - proper indentation (possibly the most important), comments, declaration of variables.
* As a reminder, we use the [AirBnB Styleguide](https://github.com/airbnb/javascript). We're all capable of improving our style - on one cursory glance through I saw at least three things I do poorly and can improve on.
* Remember to use your freshly installed eslint to check your code for errors!


#### Part 1 - Express with Data

* Now we're going to build an express app that can handle data
* Create a new directory called `angry-birds`, with a file called `index.js` and any other files you may need for the below (e.g views).
* Use express generator to generate the basic file structure for your project
* Ensure that your server is listening for a port - have it log 'Listening on Port PORTNUMBER' where PORTNUMBER is a variable you set in your .env file  
* Read the angry_birds.json file and save that array to a variable that will act like a database
* Write three GET routes: `/`, `/angry-birds` and `/angry-birds/:id`:
* `/` should **render** a home page with a link to '/angry-birds' 
* `/angry-birds` should **render** a view of ALL angry birds. This view should have each bird's name, ability, image, and group visible on the page, as well as a link to `/angry-birds/BIRDS_ID`. There should also be a link back to `/`. There will be an opportunity to organize and style all pages coherently in an upcoming part
* `/angry-birds/:id` should **render** a view of JUST the angry bird with the matching ID. This should have the bird's name, ability, image, and group visible on the page, as well as links back to `/` and `/angry-birds`
* How would you access the id when visiting `/angry-birds/4`? 

#### Part 2 - Filtering

* Now we're going to expand the filtering capabilities of the Angry Birds app
* Edit the `/angry-birds` route to handle query parameters of 'group', 'species', and 'feels'
* Start with testing just one parameter, then increment to exactly two, and then all three
* The page should render an angry bird that matches ALL the criteria of our query parameters - this is not about sorting them into any particular order

#### Bonus:  Part 3 - Multiple Filters
* Edit the filter function to be able to handle any number of the parameters at a time
* This should not look like a bunch of if conditions regarding the number of parameters, or which combination of parameters are chosen

#### Part 4 - Organizing

* Time to clean up our visuals - start by creating a public directory inside our angry birds directory, a css directory inside that, and any style files you may need inside there
* The home page is pretty bare, let's css and custom animations to make it look nicer.
* Let's make our `/angry-birds' page look more organized, like [Pinterest](https://cdn.shopify.com/s/files/1/0070/7032/files/pinterest-marketing.png?6545).
* Each bird should have their own card section
* Each birds individual page, found at `/angry-birds/BIRDS_ID` also doesn't have much on it. Organize all the information into a card.

#### Bonus: Advanced organizing
* This page desperately needs a modal.
* Don't tell the UXDI instructors, as this likely isn't great design, but clicking on the card should toggle the modal
* The modal should be fixed across the entire screen, with a fully opaque section in the middle with the bird's image
* Clicking the bird's image will close the modal

## Reading and videos
* Read the enviroment variable section of [this](https://medium.com/javascript-scene/introduction-to-node-express-90c431f9e6fd) article.
* Read all three pages of [this SQL article](http://www.databasejournal.com/sqletc/article.php/1469521/Introduction-to-Relational-Databases.htm) The site looks like it should be hosted at angelfire but the content is solid
* Watch the following videos
  - [SQL video](https://www.youtube.com/watch?v=h8IWmmxIyS0)
  - [SQL video](https://www.youtube.com/watch?v=4q-keGvUnag)
  - [SQL video](https://www.youtube.com/watch?v=V5DyvUfsboA) This guy's Mustache...

## Deliverables
* A link to your repo
* A link to your page deployed on heroku

# Homework is due Sunday (4/23) night at 11:00PM, Good Luck!
# Remember your outcomes homework is due on Wednesday!