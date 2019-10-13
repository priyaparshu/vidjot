# vidjot
Vidjot is a CRUD application with login functionality. You can register and add/manage ideas for future videos. 
It has a 
    welcome page, 
    about page, 
    ideas add page,
    ideas edit page, 
    place where user can register or login. 
    
    It has a feature for client side validation. It has a feature for privacy where one user cannot see the ideas of another user. 

This application has following dependencies:
    express:  A web framework for node.
    express-handlebars: A templating engine used to render views on server. We use {{}} to send dynamic variable to the template.
    BootStrap: This help us with UI. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
    MongoDB: It is a denormalized NoSQL database.It is schema-less i.e documents have varying sets of fields with different data types. 
             This provides your data model with flexibility as it evolves over time. We will also use Mongoose is an object document modeling (ODM) layer that sits on top of Node's MongoDB driver. It helps us to define schema at application level. Mongoose has built in validation for schema definitions. 
    body-parser: A middleware that sits between the req and res. body-parser extract the entire body portion of an incoming request stream 
                 and exposes it on req.body.parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. 
    method-override: It lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    express-sessions: 
                    HTTP is stateless; in order to associate a request to any other request, you need a way to store user data between HTTP requests. 
                    Cookies and URL parameters are both suitable ways to transport data between the client and the server. But they are both readable and on the client side. Sessions solve exactly this problem. You assign the client an ID and it makes all further requests using that ID. Information associated with the client is stored on the server linked to this ID.
    connect-flash: The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. We use a global variable success_msg, error_msg, error to store the messages so that we can output it to the template.

 When a user adds an idea to the ideas form, we send a Post request to '/ideas', we validate the form input and then save it to the db.      
