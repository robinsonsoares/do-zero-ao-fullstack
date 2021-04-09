const moogose = require('mongoose');

moogose.connect(process.env.MONGO_URL_CONNECT, 
    { 
        useNewUrlParser: true , 
        useUnifiedTopology: true 
    }, 
    () => {
    console.log("Connected to MongoDB");
    }
);