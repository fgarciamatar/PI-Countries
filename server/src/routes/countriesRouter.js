const { Router } = require("express");
const { getCountries, getCountryByID } = require("../handlers/countriesHandlers")

const countriesRouter = Router();

countriesRouter.get("/", getCountries),//cuando hagamos un get a esta ruta se ejecutara  el handler getCountries
countriesRouter.get("/:id", getCountryByID)//cuando hagamos un get a esta ruta se ejecutara  el handler getCountryByID

module.exports = countriesRouter;