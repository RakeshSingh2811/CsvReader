const express = require('express');
// initializing Express
const app = express();
// saving express instance in a app variable
const port = 8000;
//declaring a port
const upload = require('express-fileupload');
//initializing express-file-upload to a variable
const expressLayouts = require('express-ejs-layouts');
//initializing expressLayouts to a variable
app.use(upload());
//to use uploads in the app
app.use(express.static('./assets'));
//to declare the static folder
app.use(expressLayouts);
// to use the ejs layouts
app.set('view engine','ejs');
// specifying view engine
app.set('views','./views');
//setting views location
app.use(express.urlencoded());
app.use('/',require('./routes'));
//telling app to route to routes folders index for start page

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error while Running the server:${err}`)
    }
    console.log(`server is running at port:${port}`)
})
//making the app to run on the port specified
