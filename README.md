**#DashTasks**

**DashTasks** is a basic clone of **Trello** (*backend only*) where you can **add Users** and **create Tasks** for them.

**EndPoints:-**

 - user/
	 - get 
		 - / -> returns a list of all the users
	 - post 
		 - / -> adds a new user 
	 - put
		 - / -> updates an user data
	 - delete
		 - / -> deletes an existing user
 - task/
	  - get
		  - / -> returns the list of all tasks
		  - /user/ -> returns the list of tasks for an specific user
	 - post
		 - / -> adds a new task
	 - put
		 - / -> updates an already existing task
	 - delete
		 - / -> deletes an already existing task

**Execution on Local** 

    git pull https://github.com/isupersky/dashtasks.git
    npm install
    npm start 

then start the postman and try executing all end points.

**ScreenShots**

![post: user/](https://ibb.co/dLpBqC6) -> https://ibb.co/dLpBqC6

![get: user/](https://ibb.co/HDT85Pj) -> https://ibb.co/HDT85Pj

![put: user/](https://ibb.co/bQR82VT) -> https://ibb.co/bQR82VT
![put- success: ](https://ibb.co/X2s46xD) -> https://ibb.co/X2s46xD

![delete: user/](https://ibb.co/nn0VB12) -> https://ibb.co/nn0VB12
![delete: success](https://ibb.co/KLBq665) -> https://ibb.co/KLBq665


![post: task/](https://ibb.co/NW6ZQJD)->  https://ibb.co/NW6ZQJD

![get:task/](https://ibb.co/HXv4fc2) -> https://ibb.co/HXv4fc2

![get:task/user/](https://ibb.co/sCqK4K9) -> https://ibb.co/sCqK4K9

![put: task/](https://ibb.co/gJPHrT8) -> https://ibb.co/gJPHrT8
![put:success](https://ibb.co/XX0hpdW) -> https://ibb.co/XX0hpdW

![delete: task/](https://ibb.co/88FHzjY) -> https://ibb.co/88FHzjY

