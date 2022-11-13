const ejs = require('ejs');
const path = require('path')
const express = require('express');

function configureRenderEngine(application) {
    application.engine('html', ejs.renderFile);
    application.set('view engine', 'html');
    application.set('view engine', 'ejs');
    application.set('views', path.join(__dirname, '../views'));

    application.use('/public', express.static(path.join(__dirname, 'public')));
    application.use(express.static('./public'));
}

module.exports = configureRenderEngine;