const database = require("../database");
const reminderModel = {
  getRemindersByUserId: (id) => {
    u = database[id];
    if (u && u.src === "local") {
      return u.reminders;
    } else {
      return u[Object.keys(u)[0]].reminders;
    }
  },
  getReminderByUserIdReminderId: (uid, rid) => {
    reminders = reminderModel.getRemindersByUserId(uid);
    if (reminders) {
      r = reminders.find((reminder) => {
        return reminder.id == rid;
      });
      if (r) return r;
    } else {
      return null;
    }
  },
  addReminderToUserId: (id, reminder) => {
    reminders = reminderModel.getRemindersByUserId(id);
    reminder.id = reminders.length + 1;
    reminder.completed = false;
    reminders.push(reminder);
  },
  updateReminderByUserIdReminderId: (uid, rid, newReminder) => {
    reminders = reminderModel.getRemindersByUserId(uid);
    reminders[rid - 1] = newReminder;
  },
  deleteReminderByUserIdReminderId: (uid, rid) => {
    reminders = reminderModel.getRemindersByUserId(uid);
    let itemIndex = reminders
      .map(function (item) {
        return item.id;
      })
      .indexOf(rid);
    console.log(rid);
    console.log(itemIndex);
    reminders.splice(itemIndex, 1);
  },
};

module.exports = reminderModel;
