# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run server`

Starts the server.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Playable Todo
A simple todo application built with Node.js, Express, and SQLite3.

### Installation

To get started, clone the repository and install the dependencies:
git clone https://github.com/yigitzarbun/playable-todo.git
cd playable-todo
npm install

### Database setup

This application uses SQLite3 as its database. To set up the database, run the following command in your terminal:
npm run db:migrate
This command will create a database file named database.sqlite and run the migrations to set up the necessary tables.

### Starting the server

To start the server, run the following command:
npm start
This will start the server on port 3000. You can then visit http://localhost:5000/ in your browser to access the application.

### User registration

This application includes user registration functionality. To register a new user, click the "Sign up" link on the login page and fill out the registration form. Once you have registered, you can log in using your email address and password.

### API documentation

This application includes a simple RESTful API that can be used to interact with the todo items. The available endpoints are:
GET /api/todos: Returns a list of all todo items.
POST /api/todos: Adds a new todo item.
GET /api/todos/:id: Returns the details of a single todo item.
PUT /api/todos/:id: Updates a todo item.
DELETE /api/todos/:id: Deletes a todo item.
To use the API, you must be authenticated. When you log in, you will receive a JSON Web Token (JWT) that you can use to authenticate your API requests. To authenticate your requests, include the JWT in the Authorization header of your HTTP requests, like this:
Authorization: Bearer <JWT>
For example, to get a list of all todo items, you would send a GET request to /api/todos with the JWT in the Authorization header.

### Usage

Once you're logged in, you can start using the app:
To add a new task, click the "New Task" button.
Enter a title and description for the task, and click the "Save" button.
To edit a task, click the "Edit" button next to the task you want to edit.
Make your changes and click the "Save" button.
To delete a task, click the "Delete" button next to the task you want to delete.
