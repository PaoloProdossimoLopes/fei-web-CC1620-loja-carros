const express = require('express');

const configureLoginRoute = require('./routes/login-route');
const configureRegisterRoute = require('./routes/register-routes');
const configureListRoute = require('./routes/list-route');
const configureManagerRoute = require('./routes/manager-route');
const configureSaletRoute = require('./routes/sale-route');
const configureRenderEngine = require('./middleware/engine');
const configureParser = require('./middleware/parser');

const application = express();

configureRenderEngine(application);
configureParser(application);

configureLoginRoute(application);
configureRegisterRoute(application);
configureListRoute(application);
configureManagerRoute(application);
configureSaletRoute(application);

const port = 8080;
application.listen(port, console.log(`available ON at http://localhost:${port}`));