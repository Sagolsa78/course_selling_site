# course_selling_site

#This is a simple backend code of a Course Selling Website                     //this in the real word would tranlslate to an app like Udemy
It supports two types of users:
  1.admin
  2.user

The admin can signup on the site with the a unique username and a password and It is free to  create a new course in the site
The users have to signup on the site with a username and password and it when they are signin they can view the available course in the site and can purchased it 

It use mongodb to store all the data given to the site as in the followed manner -
  Admin :contains the data of admins which have signined mainly the the username and the password with a unique ID  
  User: it stores the data related to users who have signin (username,password)and the course which they have purchased on the site
  Course: It stores the data related to the course like the title,description,Price,etc 

 
