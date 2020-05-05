const mongoose = require('mongoose');
const dotEnv = require('dotenv');

dotEnv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const db_address = process.env.DB_ADDRESS;
const db_port = process.env.DB_PORT;

mongoose.connect(`mongodb://${user}:${password}@${db_address}:${db_port}/${database}`, 
{useNewUrlParser: true,
useUnifiedTopology:true });

mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
    console.log('Problem connection to the database'+error);
});

module.exports = mongoose;