# eat-that-burger

Technology used: node, express, handlebars
NPM Packages: expresss, method-override, body-parser, mysql

Overview
I've created a burger logger with MySQL, Node, Express, Handlebars and an ORM. Following the MVC design pattern, I used Node and MySQL to query and route data in my app, and Handlebars to generate my HTML.

• This is a restaurant app that lets users input the names of burgers they'd like to eat.
• Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured.
• Each burger in the waiting area also has a Eat it! button. When the user clicks it, the burger will move to the right side of the page.
• Burgers are stored in a database, whether eaten or not.