const gitdatabase = [
    {
      id: 17775694,
      name: "trainville",
      email: "terry.rainville@gmail.com",
      password: "terry123!",
    },
    {
      id: 2,
      name: "Johnny Doe",
      email: "johnny123@gmail.com",
      password: "johnny123!",
    },
    {
      id: 3,
      name: "Jonathan Chen",
      email: "jonathan123@gmail.com",
      password: "jonathan123!",
    },
  ];
  
  const userModel = {
    findOne: (email) => {
      const user = gitdatabase.find((user) => user.email === email);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with email: ${email}`);
    },
    findById: (id) => {
      const user = gitdatabase.find((user) => user.id === id);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with id: ${id}`);
    }, 
    // check for user and save if needed
    saveUserProfile: (profile) => {
      const id = Number(profile.id);
      const user = gitdatabase.find((user) => user.id === id);
      if (user) {
        return user;
      }else{
          let newUser = {id:id, name:profile.username};
          gitdatabase.push(newUser);
          return newUser;
      }
    },
  };
  
  module.exports = { gitdatabase, userModel };
  