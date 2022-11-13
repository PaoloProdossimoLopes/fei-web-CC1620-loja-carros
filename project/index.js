const express = require('express');
const configureLoginRoute = require('./routes/login-route');
const configureRegisterRoute = require('./routes/register-routes');

const application = express();

configureLoginRoute(application);
configureRegisterRoute(application);

const port = 8080;
application.listen(port, console.log(`available on http://localhost:${port}`));