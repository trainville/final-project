// twilio routes

const twilioRouter = require("express").Router();
const twilioController = require("../controller/twilio_controller");

twilioRouter.get("/message",twilioController.makeCall);

module.exports = twilioRouter;