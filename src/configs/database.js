const mongoose = require('mongoose');

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;


mongoose.connect(`mongodb://${user}:${password}@localhost:27017/${database}`, 
{useNewUrlParser: true,
useUnifiedTopology:true });

mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
    console.log('Problem connection to the database'+error);
});


module.exports = mongoose;