## Fast Pizza Menu React App.

---

### About:

Pizza Menu App is a web application that uses React to display a menu of pizzas available for order. The menu is generated dynamically from a file called `pizzaData`, and it includes the name, ingredients, price, and photo of each pizza. Additionally, the application indicates whether a pizza is sold out.

---

### Features:

The application is composed of three main sections.
* Header, which includes the name of the application and information about the pizzeria.
* Menu, which lists six different types of pizzas. If a pizza is sold out, it will be grayed out. If there are no pizzas available, the menu will not be displayed.
* Footer, which displays the local time using `Date().getHours()`. If the current time is between 12:00 and 22:00, an order button will be displayed. Otherwise, the order button will not be shown.

In this application use core concepts of building apps:
* JSX
* Components
* Props

You can try here: [fast-pizza-menu-react.netlify.app](https://fast-pizza-menu-react.netlify.app/)

---

### Sample task, photo:

* Day from 12:00 to 22:00
  ![image1](https://github.com/SimAndrew/Fast-Pizza-Menu-React/assets/44125451/d2dd25e7-2222-439a-969c-9b186e6a8a5e)
* Night from 22:00 to 12:00
  ![image](https://github.com/SimAndrew/Fast-Pizza-Menu-React/assets/44125451/56a9aadf-b22c-4a61-9394-29d52ecc360d)
* No pizza

  When `const pizzas = [];`
  ![image](https://github.com/SimAndrew/Fast-Pizza-Menu-React/assets/44125451/c7efb002-034d-4b71-8def-399562316c6b)
### Technologies:

* React JS
* Vite, Eslint, Prettier

### Run the app

* Clone a project:

```
https://github.com/SimAndrew/Fast-Pizza-Menu-React.git
```

* Open project code in your editor.
* Install the dependencies, enter into the terminal:

```
npm install
```

* Run the project, enter into the terminal:

```
npm run dev
```
