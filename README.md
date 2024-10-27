# SettleBuddy App

Welcome to SettleBuddy! An app that helps new immigrants settle in the UK.

## Running backend

Before running the frontend you will need to start up a local server to fetch data from the backend.

To do that, cd into the backend directory where you will install dependencies:

```bash
npm install 
```

Then compile the code: 

```bash
npx tsc
```
And start up the server:

```bash
node dist/app.js
```

## Running frontend

After starting up the server, you can launch the frontend.
In the root directory, first install dependencies:

```bash
npm install 
```

Then run the project:
```bash
npm run dev 
```

In your browser, navigate to http://localhost:5173 to access the app.