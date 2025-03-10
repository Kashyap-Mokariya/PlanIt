# Planit 

Planit is a project management and task-tracking application built with **Next.js**, **TypeScript**, **Redux**, and **Prisma**, utilizing a **T3 stack** for full-stack development. It allows users to manage tasks, track project progress, and collaborate with teams efficiently.  

## ✨ Features  

- 🏗 **Project & Task Management** – Create, update, and organize projects and tasks.  
- 📅 **Priority Sorting** – Categorize tasks as **urgent**, **high**, **medium**, **low**, or **backlog**.  
- 📊 **Multiple Views** – Board, List, Table, and Timeline views for managing tasks.  
- 🔍 **Search & Filtering** – Easily find tasks and projects using a search functionality.  
- 🏢 **Team Collaboration** – Manage teams and assign tasks to specific members.  
- 🔐 **Authentication** – Supports authentication via **Clerk**.  
- ☁️ **Modern UI** – Built with **TailwindCSS**, **MUI**, and **Recharts** for a sleek design.  

## 🌐 Live Demo  

🔗 **Deployed Project:** [Planit](https://plan-it-gamma.vercel.app/)  
⚠️ **Note:** The backend may take up to **50 seconds** to initialize on the first request due to **Render's automatic instance suspension** when inactive. 

## 🏗 Tech Stack  

| Frontend | Backend | Database | Dev Tools |
| -------- | ------- | -------- | --------- |
| Next.js 15 | Node.js (Express) | PostgreSQL (Prisma) | TypeScript |
| React 18 | tRPC | Prisma ORM | Redux Toolkit |
| TailwindCSS | Zod | Drizzle ORM | ESLint & Prettier |

## 🚀 Installation & Setup  

### Prerequisites  

Ensure you have the following installed:  
- **Node.js** (v18 or later)  
- **pnpm** (Package Manager)  
- **PostgreSQL** (Database)  

### 1️⃣ Clone the Repository  

```sh
git clone https://github.com/your-username/planit.git
cd planit
```

### 2️⃣ Install Dependencies  

```sh
pnpm install
```

### 3️⃣ Set Up Environment Variables  

Copy `.env.example` and rename it to `.env`. Update the values accordingly.  

### 4️⃣ Run the Database  

Start the database using Prisma migrations:  

```sh
pnpm run db:migrate
pnpm run db:seed
```

### 5️⃣ Start the Development Server  

For the frontend:  

```sh
cd client
pnpm run dev
```

For the backend:  

```sh
cd server
pnpm run dev
```

## 🧑‍💻 Project Structure  

```
planit/
├── client/       # Frontend (Next.js, React, TailwindCSS)
│   ├── src/
│   │   ├── app/  # Pages & Layout
│   │   ├── components/ # Reusable UI Components
│   │   ├── state/ # Redux Store & API Calls
│   │   ├── styles/ # Global Styles
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── next.config.js
│   └── tsconfig.json
│
├── server/       # Backend (Express, Prisma, PostgreSQL)
│   ├── src/
│   │   ├── controllers/ # API Controllers
│   │   ├── routes/ # API Endpoints
│   │   ├── server/ # Database Connection
│   │   ├── prisma/ # ORM Config & Migrations
│   ├── package.json
│   ├── tsconfig.json
│   └── start-database.sh
│
├── .env.example  # Environment Variables Template
├── README.md     # Project Documentation
└── pnpm-lock.yaml
```

## 📌 API Routes  

| Route | Method | Description |
|-------|--------|------------|
| `/api/projects` | `GET` | Get all projects |
| `/api/projects/:id` | `GET` | Get a single project |
| `/api/tasks` | `GET` | Get all tasks |
| `/api/tasks` | `POST` | Create a new task |
| `/api/teams` | `GET` | Get all teams |
