# IntegrationAppTestTask

This project demonstrates integration with services using a backend and frontend architecture. The project consists of two parts:
- **Backend**: Generates JWT tokens.
- **Frontend**: Provides a user interface for managing integrations and creating contacts.

# 🛠️ Installation
### 1. Clone the repository
```
git clone https://github.com/EugenMyhed/integrationApp-test-task.git
cd IntegrationAppTestTask
```
### 2. Install dependencies for backend
Navigate to the integration-backend directory and install dependencies:

```
cd integration-backend
npm install
```
## Install dependencies for frontend
Navigate to the integration-frontend directory and install dependencies:

```
cd ../integration-frontend
npm install
```
# 🚀 Running the Project

## Run the Backend
### 1. Ensure you have a .env file in the integration-backend folder with the following variables:
```
WORKSPACE_KEY=your_workspace_key
WORKSPACE_SECRET=your_workspace_secret
PORT=3001
```
### 2. Navigate to the integration-backend directory and start the server:
```
cd integration-backend
node src/server.js
```
The server will run at: http://localhost:3001.

## Run the Frontend
### 1.Navigate to the integration-frontend directory and start the React application:
```
cd ../integration-frontend
npm start
```

# ⚙️ Features
## 1. Backend:
- **Backend**: Generates JWT tokens.
## 2. Frontend:
- **Displays a list of integrations with connect/disconnect functionality.**
- **Provides a form for creating contacts with integrations.**

# 🔧 Configuration
## Environment Variables:
- **Define WORKSPACE_KEY and WORKSPACE_SECRET in the .env file located in integration-backend.**
- **These are necessary for interacting with the API integrations.**
## Ports:
- **Backend runs on port 3001 by default.**
- **Frontend runs on port 3000 by default.**