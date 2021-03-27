const database = require("../database")
const reminderModel = {
    getRemindersByUserId: (id) => {
        u = database[id];
        if (u) {
            return u.reminders;
        }
        return null;
    },
    getReminderByUserIdReminderId: (uid, rid) => {
        reminders = reminderModel.getRemindersByUserId(uid);
        r = reminders.find((reminder) => {
            return reminder.id == rid
        });
        if (r) return r;
        return null;
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
        let itemIndex = reminders.map(function(item) { return item.id; }).indexOf(rid);          
        console.log(rid);
        console.log(itemIndex);
        reminders.splice(itemIndex, 1);
    },
}

module.exports = reminderModel;