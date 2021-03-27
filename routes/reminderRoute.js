// reminder routes

const reminderRouter = require("express").Router();
const reminderController = require("../controller/reminder_controller");
const { isAuthenticatedUser } = require("../middleware/auth_check");

reminderRouter.use(isAuthenticatedUser({ failureRedirect: "/auth/login", failureMessage: "login required" }));

reminderRouter.get("/", reminderController.list);
reminderRouter.get("/new", reminderController.new);
reminderRouter.get("/:id", reminderController.listOne);
reminderRouter.get("/:id/edit", reminderController.edit);

reminderRouter.get("/dashboard", (req, res) => {
    res.render("dashboard", {
      user: req.user,
    });
 });

reminderRouter.post("/save", reminderController.create);
reminderRouter.post("/update/:id", reminderController.update);
reminderRouter.post("/delete/:id", reminderController.delete);


module.exports = reminderRouter;