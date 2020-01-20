// /* eslint-disable no-template-curly-in-string */
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000

// app.use(cors());
// app.use(express.json());

// // const uri = process.env.ATLAS_URI;
// // mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
// // const connection = mongoose.connection;

// // connection.once('open', () => {
// //     console.log("MongoDB database connection established successfully");
// // })

// //const uri = process.env.ATLAS_URI;
// const uri = 'mongodb+srv://dbUser:dbUserPassword@testcluster-ghcdy.mongodb.net/test?retryWrites=true&w=majority'
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// app.listen(port, () => {
//     console.log('server is running on port: ' + port);
// });





const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is runnings on port: ${port}`);
});

