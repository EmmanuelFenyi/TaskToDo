# TaskToDo App

TaskToDo is a simple task management application that allows users to organize their tasks efficiently. Users can register an account, log in, create tasks, mark tasks as completed, edit task details, prioritize tasks, and add comments to tasks.

## MVP Specifications

### Architecture

The TaskToDo app follows a client-server architecture:

- **Client-side (Frontend):** Implemented using React.js components handling user interaction.
- **Server-side (Backend):** Built with Node.js server handling API requests.
- **Database:** MongoDB is used to store task data.
- **API Routes:** Express.js routes are implemented for handling CRUD operations.
- **HTTP Requests:** Data transmission between client and server is managed using Fetch API.

### APIs and Methods

#### API Routes for Web Client

**Authentication:**
- `POST /api/auth/register`: Registers a new user.
- `POST /api/auth/login`: Logs in an existing user.
- `POST /api/auth/logout`: Logs out the currently authenticated user.

**Tasks:**
- `GET /api/tasks`: Retrieves all tasks stored in the database.
- `POST /api/tasks`: Adds a new task to the database.
- `GET /api/tasks/:id`: Retrieves a specific task by its ID.
- `PUT /api/tasks/:id`: Updates a specific task.
- `DELETE /api/tasks/:id`: Deletes a specific task.
- `POST /api/tasks/:id/comments`: Adds a comment to a specific task.

#### API Endpoints for Other Clients

No additional API endpoints are provided for other clients in the MVP.

#### 3rd Party APIs

No 3rd party APIs are utilized in the MVP.

### Data Model

#### User Model
- `_id`: ObjectId (auto-generated)
- `username`: String
- `email`: String
- `password`: String (hashed)
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

#### Task Model
- `_id`: ObjectId (auto-generated)
- `title`: String
- `description`: String
- `completed`: Boolean
- `dueDate`: Date
- `priority`: String
- `createdBy`: ObjectId (reference to User who created the task)
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

#### Comment Model
- `_id`: ObjectId (auto-generated)
- `taskId`: ObjectId (reference to the task the comment belongs to)
- `userId`: ObjectId (reference to the user who created the comment)
- `content`: String
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

### User Stories

1. As a user, I want to be able to view all tasks, so I can see what needs to be done.
2. As a user, I want to be able to add a new task, so I can keep track of new responsibilities.
3. As a user, I want to be able to mark a task as completed, so I can track my progress.
4. As a user, I want to be able to edit a task, so I can update its details if needed.
5. As a user, I want to be able to prioritize tasks, so I can focus on the most important ones first.
6. As a user, I want to be able to register an account, so I can securely manage my tasks.
7. As a user, I want to be able to log in to my account, so I can access my tasks from any device.
8. As a user, I want to be able to add comments to tasks, so I can collaborate and communicate with others regarding specific tasks.

## Installation

To run this application locally, you need to have Node.js and MongoDB installed on your system.

1. Clone this repository:

```bash
git clone https://github.com/EmmanuelFenyi/TaskToDo.git

2. Navigate to the project directory:
cd TaskToDo

3. Install dependencies for both frontend and backend:
cd frontend
npm install

cd ../backend
npm install

4. Start the backend server:
npm start

5. Start the frontend development server:
cd ../frontend
npm start

Open your web browser and go to http://localhost:3000 to view the TaskToDo app.

Contributing
Contributions are welcome! Please open a pull request or submit an issue if you find any bugs or have suggestions for improvements.

License
This project is licensed under the MIT License.