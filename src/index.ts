import express from 'express';

// Initializations
const app = express();

// Settings
app.set('port', 3000);

// Middlewares

// Routes


// Static files

// Starting
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});