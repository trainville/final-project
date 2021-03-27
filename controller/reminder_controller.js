const reminderModel = require("../models/reminder_model");
const userModel = require("../models/user_model");
const twilioController = require("../controller/twilio_controller");


const remindersController = {
  list: (req, res) => {
    console.log("reminderController list");
    console.log(userModel.getFriendsById(req.user.id));
    const user = userModel.getUserById(req.user.id);
    const reminders = reminderModel.getRemindersByUserId(req.user.id);
    res.render("reminder/index", { uname: user.uname, reminders: reminders });
  },

  new: (req, res) => {
    console.log("reminderController new");
    user = userModel.getUserById(req.user.id);
    res.render("reminder/create", { uname: user.uname });
  },

  listOne: (req, res) => {
    console.log("reminderController listOne");
    const user = userModel.getUserById(req.user.id);
    const reminder = reminderModel.getReminderByUserIdReminderId(req.user.id, req.params.id);
    if (reminder) {
      res.render("reminder/single-reminder", { uname: user.uname, reminderItem: reminder });
    } else {
      res.render("reminder/index", { uname: user.uname, reminders: reminders });
    }
  },

  create: (req, res) => {
    console.log("reminderController create");
    const user = userModel.getUserById(req.user.id);
 
    console.log(req.body);

    const reminder = {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      phone: req.body.phone
    };

    // Terry
    // send Twilio SMS message
    const twilioMessage = 'Thank you for using our sevice. We will send you a reminder at ' + req.body.dueDate + ' for ' + req.body.title;
    twilioController.makeCall(req, twilioMessage);

    reminderModel.addReminderToUserId(req.user.id, reminder);
    res.redirect("/reminder");
  },

  edit: (req, res) => {
    console.log("reminderController create");
    const user = userModel.getUserById(req.user.id);
    const reminder = reminderModel.getReminderByUserIdReminderId(req.user.id, req.params.id);
    res.render("reminder/edit", { uname: user.uname, reminderItem: reminder });
  },

  update: (req, res) => {
    console.log("reminderController update");
    console.log(req.body);
    const newReminder = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      completed: (req.body.completed != 'false'),
      dueDate: req.body.dueDate,
    };
    reminderModel.updateReminderByUserIdReminderId(req.user.id, req.params.id, newReminder);
    res.redirect("/reminder");
  },

  delete: (req, res) => {
    console.log("reminderController delete");
    reminderModel.deleteReminderByUserIdReminderId(req.user.id, req.params.id)
    res.redirect("/reminder");
  },
};

module.exports = remindersController;
