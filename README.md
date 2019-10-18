# vidjot
Vidjot is a CRUD application with login functionality. It can register and add/manage ideas for future videos. 
It has a 
    welcome page, 
    about page, 
    ideas add page,
    ideas edit page, 
    register page
    login page
    
    It has features like client side validation, privacy (where one user cannot see the ideas of another user). 

Dependencies: In this application I am using the following modules:-
    
    express:  A web framework for node.
    express-handlebars: A templating engine used to render views on server. We use curly brackets like this "{{}}" to send dynamic variable to the template.
    BootStrap: This help us with UI. Bootstrap is an open source toolkit for developing applications with HTML, CSS, and JS.
    MongoDB: It is a denormalized NoSQL database.It is schema-less i.e documents have varying sets of fields with different data types. This provides the data model the flexibility as it evolves over time. 
    Mongoose: It is an object document modeling (ODM) layer that sits on top of Node's MongoDB driver. It helps us to define schema at application level. Mongoose has built in validation features for schema definitions. 
    body-parser: A middleware that sits between the req and res. body-parser extract the entire body portion of an incoming request stream and exposes it on req.body. It parses JSON, buffer, string and URL encoded that was submitted using HTTP POST request. 
    method-override: It lets me use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    express-sessions: HTTP is stateless. In order to associate a request with any other request, I need a way to store user data between HTTP requests. Cookies and URL parameters are both suitable ways to transport data between the client and the server, but they are both readable on the client side. Sessions solve this problem by assigning the client an ID so that it makes all further requests using that ID. Information associated with the client is stored on the server linked to this ID.
    connect-flash: Flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. I am using global variable success_msg, error_msg, error to store the messages so that I can output it to the template.
    Passport with local strategy: Passport is a authentication module for node. I am going to store the credentials locally on mongodb. I will use bcrypt to encrypt the password.
    bcrypt: It is used to encrypt the password before storing it to mongodb.
    serializeUser: This is a method that is called at login request(during the authentication) and if login is successful, it decides what user information should get stored in the session. A cookie is sent to the browser for the same to maintain the session.
    deserializeUser: is a method that is called on all subsequent request and is called by the passport.session middleware. It enables me to load additional user information on every request. This user object is attached to the request as req.user making it accessible in my request handling.
When a user adds an idea to the ideas form, we send a Post request to '/ideas', I validate the form input and then save it to the db.      
