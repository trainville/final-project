// let Database = {
//     cindy: {
//         reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}]
//     },
//     alex: {
//         reminders: []
//     } 
// }

let Database = {
    cindy: {
        email:"cindy@gmail.com", src:"local", password:"cindy",
        reminders: [
            {id: 1, title: "abc", description: "abcabc", completed: false},
            {id: 2, title: "abc", description: "abcabc", completed: false, dueDate:"2021-04-01"},
        ],
        friends: [2],
    },
    2: {
        email:"alex@gmail.com", src:"local", password:"alex",
        reminders: [
            {id: 1, title: "alex1", description: "alex1 reminder", completed: false, dueDate:"2021-04-01 11:15AM", phone:"604-555-1213"},
            {id: 2, title: "alex2", description: "alex2 reminder", completed: false, dueDate:"2021-04-01 11:25AM", phone:"604-555-1214"},
            {id: 3, title: "alex3", description: "alex3 reminder", completed: false, dueDate:"2021-04-01 11:35AM", phone:"604-555-1215"},
            {id: 4, title: "alex4", description: "alex4 reminder", completed: false, dueDate:"2021-04-01 11:45PM", phone:"604-555-1216"},
            {id: 5, title: "alex5", description: "alex5 reminder", completed: false, dueDate:"2021-04-01 11:55PM", phone:"604-555-1217"},
        ]
    } 
}

module.exports = Database;