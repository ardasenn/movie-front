# Movie Store App

- In this application, users can register on the site and purchase movies. You can check this project on live:
- Link : https://movie-front-plum.vercel.app
- Backend repository link : https://github.com/ardasenn/MovieStore

## Why did I develop this project?

We all work within certain structures at our workplaces. I want this project to be a personal endeavor where I can develop and apply new knowledge.

### Tech Stack

- Onion Architecture
- PostgreSQL (Cloud) for the database, using EntityFrameworkCore as the ORM
- Backend in .NetCore 6
- Frontend development with React

### Goals and Practices Targeted in the Project

- Implementation and control of user authentication processes using Jwt token infrastructure
- Learning how to write custom middleware
- Frontend development with React to gain experience
- Learning Onion Architecture through this project. This is my first project using this design pattern!

### If you want to run this project from your localhost please check steps below

- You need to download modules with this code : npm install
- After than you have to create your .env file like example below :

```js
REACT_APP_BASE_ENDPOINT=https://your-api-endpoint.com/api
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=https://your-firebase-database-url.com
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id

```

- Also you need to change connection string from backend.
