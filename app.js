const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const path = require('path');
const db = require('./config/database');
const app = express();

// Load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

//Passport Config
require('./config/passport')(passport);
mongoose.Promise = global.Promise;

mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));

require('./models/Idea')

const Ideas = mongoose.model('Ideas')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));


//express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,

}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash())

// Global variables

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next()
})
// app.use((req, res, next) => {
//     req.name = ' Brad Traversy';
//     next();
// });

app.get('/', (req, res) => {
    const title = "Welcome again!!";
    console.log(req.name);
    res.render('index', { title: title });
});





app.get('/about', (req, res) => {
    console.log(req.name);
    res.render('about');
});

//use routes

app.use('/ideas', ideas);
app.use('/users', users);

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});