const express = require('express');
const configureLoginRoute = require('./routes/login-route');
const configureRegisterRoute = require('./routes/register-routes');
const configureRenderEngine = require('./middleware/engine')

const application = express();

configureRenderEngine(application);
configureLoginRoute(application);
configureRegisterRoute(application);

const port = 8080;
application.listen(port, console.log(`available on http://localhost:${port}`));