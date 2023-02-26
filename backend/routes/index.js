const express = require('express');
// const { getAll, get, add, replace, remove } = require('../data/quiz');
const routes = express.Router();

const indexController = require('../Controllers/indexController')
const quizController = require("../Controllers/quizController")
routes.get("/", indexController.index)

routes.get("/quizes", quizController.index);
routes.get("/quizes/:id", quizController.oneQuiz);

module.exports = routes;