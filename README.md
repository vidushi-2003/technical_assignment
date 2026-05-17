# Service Request Board

A full-stack mini service request platform built for the GlobalTNA Full-Stack Developer Intern Technical Assessment.

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Features

- View all job requests
- Create new service requests
- Update job status
- Delete jobs
- Search jobs
- Filter by category

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/jobs | Get all jobs |
| GET | /api/jobs/:id | Get single job |
| POST | /api/jobs | Create new job |
| PATCH | /api/jobs/:id | Update job status |
| DELETE | /api/jobs/:id | Delete job |

---

# Author

vidushi dewlini