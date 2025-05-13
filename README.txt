Agri-Energy Connect Web Application
-----------------------------------

Project Overview:
This is a web-based prototype built using ASP.NET MVC and Firebase.
It allows two user roles: Farmers and Employees.

Farmers:
- Register and log in via Firebase Authentication
- Add agricultural product data (name, type, production date)
- View their submitted products

Employees:
- Log in via Firebase Authentication
- View products from all farmers
- Filter products by type or production date

Technologies Used:
- ASP.NET Core MVC
- Firebase Authentication
- Firebase Firestore Database
- Bootstrap 5 for responsive design

How to Run:
1. Open the solution in Visual Studio 2022
2. Ensure internet connection for Firebase SDKs
3. Run the project (IIS Express or Kestrel)
4. Use the navigation bar to register or log in

Credentials:
- Firebase is used to handle login; create a new account via Register.
- No hardcoded logins – all user data is stored in Firestore.

Firestore Structure:
- Collection: users → each document contains `email` and `role` ("farmer" or "employee")
- Collection: products → each document contains `name`, `type`, `date`, and `farmerId`

Firebase Configuration:
- Stored in `wwwroot/firebase/firebase-config.js`
- Linked via `_Layout.cshtml`

Responsiveness:
- Fully responsive using Bootstrap grid and layout classes
- Compatible with desktop, tablet, and mobile screens

