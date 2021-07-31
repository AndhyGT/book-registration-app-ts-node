import mongoose from 'mongoose';

import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log('DataBase Connect'))
    .catch(err => console.log(err));