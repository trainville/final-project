const database = require("../database")
const userModel = {
    validateLocalUser: (email, password) => {
        for (const id in database) {
            if (database[id].email == email && database[id].password == password) {
                return { id, uname: email };
            }
        }
        return null;
    },

    addLocaluser: (email, password) => {
        for (const id in database) {
            if (database[id].email === email) {
                return "user already exists";
            }
        }
        database[Object.keys(database).length + 1] = {
            email: email, src: "local", password: password,
            reminders: [
            ],
            friends: [],
        }
        console.log(database)
    },

    getUserById: (id) => {
        u = database[id];
        if (u) {
            return {
                id: id,
                uname: (u.email || u.githubName)
            }
        }
        return null;
    },
    
    getFriendsById: (id) => {
        u = database[id];
        if (typeof (u.friends) !== 'undefined' && Array.isArray(u.friends)) {
            return u.friends.map(userModel.getUserById);
        }
        return null;
    }
}

module.exports = userModel;