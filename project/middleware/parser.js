const express = require('express')

function configureParser(application) {
    application.use(express.json())
    application.use(express.urlencoded({ extended: false }))
}

module.exports = configureParser