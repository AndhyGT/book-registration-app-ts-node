import express from 'express';
import Handlebars from 'handlebars';
import exphbs from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import path from 'path';

import indexRoutes from './routes';
import indexBooks from './routes/books';

// Initializations
const app = express();
import './database';


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes
app.use('/', indexRoutes);
app.use('/books', indexBooks);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});