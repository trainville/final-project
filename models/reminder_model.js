const database = require("../database")
const userModel = require("./user_model");

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
        reminder.id = Math.max(...(reminders.map(r=>{return r.id}))) + 1;
        reminder.completed = false;
        reminders.push(reminder);
    },
    updateReminderByUserIdReminderId: (uid, rid, newReminder) => {
        reminders = reminderModel.getRemindersByUserId(uid);
        i = reminders.findIndex(r => r.id == rid);
        reminders[i] = newReminder;
    },
    deleteReminderByUserIdReminderId: (uid, rid) => {
        reminders = reminderModel.getRemindersByUserId(uid);
        i = reminders.findIndex(r => r.id == rid);
        reminders.splice(i, 1);
    },
    getFriendsRemindersList: (uid) => {
        friendsRemindersList = userModel.getFriendsById(uid).map((u)=>{
            r = reminderModel.getRemindersByUserId(u.id);
            return {user: u, reminders: r};
        })
        return friendsRemindersList;
    },

}

module.exports = reminderModel;