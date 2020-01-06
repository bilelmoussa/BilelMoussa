const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const cors = require("cors");
const os = require('os');
const path = require('path');
const mongoose = require('mongoose');
const passport = require("passport");
const compression = require('compression');
const GoogleAnalytics = require('./routes/api/GoogleAnalytics');

let  address;
let ifaces = os.networkInterfaces();

// Iterate over interfaces ...
for (let dev in ifaces) {
    // ... and find the one that matches the criteria
    let iface = ifaces[dev].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });
    if(iface.length > 0) address = iface[0].address;
}

//user api 
const user = require('./routes/api/users');

//Message api
const message = require('./routes/api/messages');

//express app
const app = express();

//compress
app.use(compression());

// cross browser
app.use(cors());

//secure headers
app.use(helmet());

// for reversed proxy users
app.enable("trust proxy");

//limit the amount request api
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
  });
app.use("/api/", apiLimiter);


//body-parser
app.use(bodyParser.json());

//config 
const config = require('./config/keys');

//db config 
const db = config.database;

//connect to database
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true );
mongoose
    .connect(db, {useNewUrlParser: true })
    .then(()=>{console.log('MongoDB Connected... ')})
    .catch(err=>{console.log('Error: ',  err)});

//passport auth
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport); 

app.use('/api/user', user);
app.use('/api/message', message);
app.use('/api/ga', GoogleAnalytics);

/*
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
*/

// Port    
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log('\x1b[36m%s\x1b[0m', `Server Started Localy on : http://localhost:${port} And http://${address}:${port}`);                
})


