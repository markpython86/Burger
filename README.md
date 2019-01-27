# Node Express Handlebars MySQL JawsDB
A simple application on changing status of a "Burger" from Ready to eaten.

### DEMO
Github Repository: https://github.com/markpython86/Burger.git

Live Heroku Link: https://burgers-yall.herokuapp.com/

### Purpose and Usefulness

This application demonstrates a simple full stack 
application with a front-end implemented with HTML, CSS 
and elements from the Bootstrap framework and the 
backend implemented with Node.js, Express and MySQL database . 
HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the 
menu. This also adds the new burger entry into the 
MySQL database. The initial burger entry is added as 
available on the menu and placed on the left side of 
the screen. The user may then eat any burger by 
clicking on it, which moves it into the adjacent column 
and updates its status accordingly in the database.

### Technologies Used
  * Javascript
  * Node JS
  * Express JS
  * AJAX
  * jQuery
  * Heroku
  * JawsDB
  * MySQL database

### Techniques and Architecture
  * MVC (Model–view–controller) architectural pattern 
  * ORM (Object-relational mapping)
  
### NPM Modules Used
  * Express
  * MySQL
  * express-handlebars

### Getting Started
1. Clone repository **Burger** to your local machine using the code -> **_git clone https://github.com/markpython86/Burger.git_**
1. Open a terminal session for the directory where the application was cloned to
1. run **_npm install_** to install all the dependencies
1. Create a DB called **burger_db** using **Sequel Pro, MySQL Workbench or Valentina StudioorHeidiSQL.**. You can find the MySQL Schema within the application directory by going to folder **db** you can use schema.sql and **_seeds.sql_** to create the table.
1. Then if you have **nodemon** installed globally on your machine run **_nodemon server.js_**. If not you can use **_node server.js_** if you have NodeJS installed. Then in the terminal. Copy _https://localhost:3000_ and paste in your fav browser to see app.
1. If you want to challenge yourself by building the app from scratch here is a [live demo page](https://burgers-yall.herokuapp.com/)


#### Good luck!