const { Router } = require("express");
const countriesRouter = require("./countriesRouter")
const activitiesRouter = require("./activitiesRouter")
const mainRouter = Router();//enrutador principal
//enrutadoores secundarios
mainRouter.use("/countries", countriesRouter)//rutas para countries
mainRouter.use("/activities", activitiesRouter)//rutas para activities

module.exports = mainRouter;

