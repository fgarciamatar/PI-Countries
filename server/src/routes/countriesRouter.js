const { Router } = require("express");
const { getCountries, getCountryByID } = require("../handlers/countriesHandlers")

const countriesRouter = Router();

countriesRouter.get("/", getCountries),
countriesRouter.get("/:countryId", getCountryByID)
countriesRouter.get("/name", getCountries)

//****problema con la query
module.exports = countriesRouter;