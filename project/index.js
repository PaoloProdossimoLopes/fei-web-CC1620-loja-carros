const express = require('express');

const configureLoginRoute = require('./routes/login-route');
const configureRegisterRoute = require('./routes/register-routes');
const configureRenderEngine = require('./middleware/engine');
const configureParser = require('./middleware/parser');

const application = express();

configureRenderEngine(application);
configureParser(application);

configureLoginRoute(application);
configureRegisterRoute(application);

const port = 8080;
application.listen(port, console.log(`available ON at http://localhost:${port}`));