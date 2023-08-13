const { Router } = require("express");
const { getCountries, getCountryByID } = require("../handlers/countriesHandlers")

const countriesRouter = Router();

countriesRouter.get("/", getCountries),
countriesRouter.get("/:id", getCountryByID)


//****problema con la query
module.exports = countriesRouter;