const { Router } = require("express");
const { postActivity, getActivity} = require("../handlers/activitiesHandlers")

const activitiesRouter = Router();

activitiesRouter.post("/", postActivity);
activitiesRouter.get("/", getActivity)
module.exports = activitiesRouter;