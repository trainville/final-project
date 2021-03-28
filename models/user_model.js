const database = require("../database");

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
      email: email,
      src: "local",
      password: password,
      reminders: [],
      friends: [],
    };
    console.log(database);
  },

  getUserById: (id) => {
    u = database[id];
    const name = u.email ? u.email : u[Object.keys(u)[0]].name;
    if (u) {
      return {
        id: id,
        uname: name,
      };
    }
    return null;
  },

  getFriendsById: (id) => {
    u = database[id];
    if (typeof u.friends !== "undefined" && Array.isArray(u.friends)) {
      return u.friends.map(userModel.getUserById);
    }
    return null;
  },
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  // check for user and save if needed
  saveUserProfile: (profile) => {
    const id = Number(profile.id);
    const user = database[profile.id];
    if (user) {
      return user;
    } else {
      let newUser = { [id]: { id: id, name: profile.username, reminders: [] } };
      database[id] = newUser;
      return newUser;
    }
  },
};

module.exports = userModel;
