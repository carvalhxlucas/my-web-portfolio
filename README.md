# Web Portfolio

A modern portfolio website built with Node.js backend and Angular frontend, both using TypeScript.

## Features

- **Modern Stack**: Node.js + Express backend with Angular frontend
- **TypeScript**: Full TypeScript implementation for type safety
- **Responsive Design**: Mobile-first responsive layout
- **RESTful API**: Backend API for portfolio data
- **Component-Based**: Modular Angular components

## Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript
- CORS enabled

### Frontend
- Angular 20
- TypeScript
- CSS3 with modern features

## Project Structure

```
my-web-portfolio/
├── backend/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── models/
│   │   └── styles.css
│   ├── package.json
│   └── angular.json
└── README.md
```

## Getting Started

### Prerequisites

**Option 1: Using Docker (Recommended)**
- Docker (v20 or higher)
- Docker Compose (v2 or higher)

**Option 2: Local Development**
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (installed globally or via npx)

### Installation

#### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd my-web-portfolio
```

2. Build and start the application:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: `http://localhost`
- Backend API: `http://localhost:3000`

For development with hot-reload:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

**Docker Commands:**
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build

# Stop and remove volumes
docker-compose down -v
```

#### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd my-web-portfolio
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

#### Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the TypeScript files:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

Or run in development mode with auto-reload:
```bash
npm run dev
```

The backend server will run on `http://localhost:3000`

#### Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Start the development server:
```bash
npm start
```

Or use Angular CLI:
```bash
ng serve
```

The frontend will run on `http://localhost:4200`

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/profile` - Get profile information
- `GET /api/projects` - Get list of projects
- `GET /api/experience` - Get work experience
- `GET /api/skills` - Get skills list

## Development

### Backend Development

```bash
cd backend
npm run dev
```

This will start the server with TypeScript compilation in watch mode.

### Frontend Development

```bash
cd frontend
npm start
```

This will start the Angular development server with hot-reload.

## Building for Production

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/` directory.

## Customization

### Update Profile Data

Edit the service files in `backend/src/services/` to customize your portfolio data:

- Profile information
- Projects
- Work experience
- Skills

### Customize Styling

Edit the CSS files in each component directory:
- `frontend/src/app/header/header.css`
- `frontend/src/app/hero/hero.css`
- `frontend/src/app/about/about.css`
- `frontend/src/app/projects/projects.css`
- `frontend/src/app/experience/experience.css`
- `frontend/src/app/skills/skills.css`
- `frontend/src/app/contact/contact.css`

## License

MIT License

## Author

Your Name

## Acknowledgments

Design inspired by modern portfolio websites.
