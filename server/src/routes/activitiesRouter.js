const { Router } = require("express");
const { postActivity, getActivity} = require("../handlers/activitiesHandlers")

const activitiesRouter = Router();

activitiesRouter.post("/", postActivity); //cuando hagamos un post a esta ruta se ejecutara  el handler postActivity
activitiesRouter.get("/", getActivity)//cuadno hagamos un get a esta ruta se ejecutara el handler getActivity
module.exports = activitiesRouter;