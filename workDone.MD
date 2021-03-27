# Breakdown of Work

(Terry) _Breakdown Of Work Document_ 


GRADING PROJECT

Armaan - inorder to check certain things you will need to setup your own accounts.

        Facebook -- might work on your local machine if you have a   facebook developer account --- but I doubt it will work but I think i was close.  Wont work for me due to HTTPS issues.

        Github -- 100% works in Lab3 but the exact same code transferred to here refuses to login.  
        Currently I am getting [object OBJECT].

        Twilio - 100% works and tested -- but you will need your own developer account to test it.  Unfortunatly even my account wont work unless the message is sent to my personal phone.  This is becuase they ask for your number and thats the only number they allow for (in development) accounts.


Mar 18 2021

(Jason & Terry) * Had developer meeting Discussed developer Rolls & Tasks.  
                Jason - Lead Programmer  
                Terry - Backup Programmer / Admin / Supervisor  

(Jason) Created Trello Account.    
(Terry) will manage it.  
(Terry) Can not do anything with Trello as I am not the admin - we probably will not bother with it as I dont think its required anymore.

(Jason) Share Trello Board with Armaan. 

(Terry) Filled in google docs with names of partners.

(Jason) Created GITHUB Repository and uploaded starter kit.

(Jason & Terry) Created clone of repository on my system.

(Jason & Terry) Watched videos on creating reminder app.

(Terry) Will supply the hosting server for the project.

(Terry) Had ideas to include the following  
        - SQL DataBase  
        - FaceBook login  
        - User picture upload  
        - Twilio SMS messageing  
(Jason) - Wants to only do the basic design asked for in class, we may incorperate these items after if there is time to do so.



Mar 19 2021

(Terry) Did review of project instruction from class 4 Video.  
 
(Terry) Setup various tasks that need to be done for setup of project.    
        - dating of file when in use  
        - project coding on listen on port 8000  
        - project production on bcit.compu-ters.ca/8080  
        - npm uninstall body-parser (Not Needed)  
        - .gitignore file contents (node_modules, .env)  
        - .env file creation with required parameters  
        
(Jason & Terry) Developer meeting to discuss the task changes above.

(Terry) Assigned Jason tasks to get done.  
        - Basic user login  
        - Proper routes setup  
        - Delete a reminder  
        - Edit a reminder  



Mar 20 2021

(Jason & Terry) Developer meeting to discuss moving forward plans.

(Terry) It was decided Jason only wants to do the basic design so I am going to attempt to do the extra items on my own.

(Terry) Reviewed Login.EJS and found issue with NAME fields being ommitted.

(Terry) Did review of project instruction from class 4 Video.

(Jason) add npm script start:dev

(Jason) add dotenv

(Jason) add morgan

(Jason) add express-session

(Jason) add connect-flash

(Jason) add passport

(Jason) add passport-local

(Terry) System Testing



Mar 21 2021

(Terry) Did review of project instruction from class 5 Video.

(Terry) Finished updating log files and documentation.

(Terry) Set up Twilio SMS API to send reminder messages

(Jason) Grouped routers into reminder and auth

(Jason) changed in-memory Database format

(Jason) completed local login

(Terry) System Testing



Mar 22 2021

(Terry) Found some formatting issues in Index.js

(Terry) Researching Connect-Flash module

(Terry) Setup FaceBook login Authentication

(Jason) Authenticated users have access to /reminder, otherwise redirect to login page with error message

(Terry) System Testing



Mar 23 2021

(Terry) Changing login screen to function with (Login With options)

(Terry) Setup FaceBook login Authentication  
        I am pretty much 100% sure I got facebook setup correctly 
        Problem is I am using a remote host with my own domain  
        Facebook requires HTTPS callback for domains  
        I am not able at this point to verify that that login works  
        Hoping I can get Jason to test (needs a localhost to test)  

(Terry) Found bug in Index.js code - Route was not properly defined

(Terry) Created System Design Diagram to aid in requirements

(Terry) Created SQL Database Design of DataTables Needed  
        - does not look like i will get around to this  
        - here is the design i was planning  
        Users  
                Id (PK)  
                email  
                password  
        
        Reminders  
                Id (PK)  
                title  
                description  
                completed  
                phone_number  
                date  
                user_id (FK)  

        Tags  
                Id (PK)  
                reminder_id (FK)  

        Subtasks  
                Id (PK)  
                reminder_id (FK)  


(Terry) Modify Views for Reminder options  
        - view = single-reminder.ejs

(Terry) Transfered Jason's work to-date to this document

(Jason) Added "Welcome user name" message

(Jason) Fixed app.get("/reminder", reminderRouter) => app.use("/reminder", reminderRouter). Thanks Terry

(Terry) System Testing



Mar 24 2021

(Terry) Transfered Jason's work to-date to this document

(Jason) Added reminder_module

(Jason) Authenticated users only accesses their own reminders (reminder_module)  

(Jason) Refactored reminder_controller (uses reminder_module)

(Jason) Implemented 'edit'

(Jason) Implemented 'delete'

(Terry) System Testing

(Jason & Terry) Had developer meeting to discuss items outstanding.

(Terry) Had system error PORT ALREADY IN USE
        EADDRINUSE-ADDRESS-ALREADY
        https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server

        lsof -i tcp:8000
        kill -9 <PID>

(Terry) Fix NavBar to only display when needed

(Terry) Modify Views for Reminder ROUTE options    
        - reminders = index.ejs  
        - view = single-reminder.ejs  
        - create = create.ejs  
                - added phone number  
                - added Date/Time  



Mar 25 2021
                
(Terry) Transfered Jason's work to-date to this document

(Jason) Completed reminder due date

(Terry) System Testing

(Terry) Setup console.log on Browser
        https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27  

        - nodemon --inspect file.js
        - in Chrome URL = about:inspect
        - Click Link = Open dedicated DevTools for Node

(Terry) Setup Node ngrok allow facebook to use HTTPS 

(Terry) Added Gitbhub passport login
        - cant get facebook without HTTPS so I will test with Github

(Terry) Modify Views for Reminder ROUTE options    
        - reminders = index.ejs
                - fixing Date Time Display
 


Mar 26 2021

(Terry) Transfered Jason's work to-date to this document

(Jason) change some `!=` to `!==` in ejs

(Jason) show different navbar for if not logged in

(Jason) show welcome message in 2 lines instead of 1 line

(Terry) System Testing

(Terry) Added Gitbhub passport login
        - spent a lot of time yesterday trying to get this working
        - got very very frustrated
        - trying again today with new approch
        - still did not work

(Terry) Wont be doing login with options -- passport is not cooperating

(Terry) Wont be doing pictures facebook and github wont load

(Terry) Setup Twilio on create of reminder to send SMS

(Terry) Modify Views for Reminder ROUTE options    
        - reminders = index.ejs
                - fixing Date Time Display
                - fixing phone number Display
        - Added phone number to database
        - view = single-reminder.ejs
                - fixing Date Time Display
                fising phone number display

(Terry) Found an error in the delete function



Mar 27 2021

(Terry) Transfered Jason's work to-date to this document

(Jason) Fixed the reminder id issue. Thanks Terry

(Jason) Display friends' reminders on the reminder list page, will not show tags and subtasks

(Jason) Display tags (list page, list one page)

(Jason) Display subtasks (summary on list page, details on list one page)

(Jason) Completed user registration

(Jason) Completed user logout

(Terry) System Testing


