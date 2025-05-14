Agri-Energy Connect Web Application

youtube video link: https://youtu.be/Z9p8lHiCiHQ
github repository link: https://github.com/VCSTDN2024/prog7311-part-2-NailArslan

Overview

Agri-Energy Connect is a simple web-based prototype that helps **farmers** record agricultural products and allows **employees** to manage and view submissions.

It supports two roles:

Farmers: add their products
Employees: view and filter all farmers' products

---

What Can Each Role Do?

Farmers:

Register and log in using email/password
Add product details: name, type (dropdown), and production date
See a list of their own products

Employees:

Log in using email/password
View products from all farmers
Filter products by:

Product type (dropdown)
Date range (from-to filter)
Add new farmer accounts via a form

---

Technologies Used

ASP.NET Core MVC (C#)
Firebase Authentication
Firebase Firestore Database
Bootstrap 5 (for mobile-friendly UI)

---

How to Run the App

1. Open the project in **Visual Studio 2022**
2. Ensure you're connected to the internet (Firebase runs online)
3. Click **Start** (IIS Express or Kestrel)
4. In the app:

- Click Register to create a new account
- Choose a role: "farmer" or "employee"

---

Login Info

No hardcoded admin accounts
All users are created through the app via Firebase Authentication
Roles are stored in Firestore under `/users`

---

Firestore Structure

`/users` collection

Each user's info is saved this way:

```json
{
  "email": "user@example.com",
  "role": "farmer" // or "employee"
}
```

`/products` collection

Each product document's structure:

```json
{
  "name": "Wheat",
  "type": "Grain",
  "date": "2025-05-14",
  "farmerId": "firebase-uid",
  "farmerEmail": "farmer@example.com"
}
```

---

Firebase Configuration

Firebase keys are stored in:
  `wwwroot/firebase/firebase-config.js`
Included automatically via `_Layout.cshtml`

---

Mobile & Device Compatibility

Fully responsive on desktop, tablet, and mobile
Built with Bootstrap grid system
Touch-friendly forms and layout

---

Note for Testers or Markers:

This app is prototype-level — security logic (like user creation) is simplified for demo purposes.
In a production app, employee-only features (like adding farmers) would be handled via Firebase Admin SDK on a backend.