# Backend Architecture

This document describes the backend architecture and organization.

## Project Structure

```
backend/
├── src/
│   ├── server.ts              # Main server file (Express setup)
│   ├── controllers/           # Request handlers
│   │   ├── profile.controller.ts
│   │   ├── projects.controller.ts
│   │   ├── experience.controller.ts
│   │   └── skills.controller.ts
│   ├── services/              # Business logic
│   │   ├── profile.service.ts
│   │   ├── projects.service.ts
│   │   ├── experience.service.ts
│   │   └── skills.service.ts
│   ├── routes/                # Route definitions
│   │   ├── index.ts           # Main router configuration
│   │   ├── profile.routes.ts
│   │   ├── projects.routes.ts
│   │   ├── experience.routes.ts
│   │   └── skills.routes.ts
│   └── types/                 # TypeScript type definitions
│       └── portfolio.types.ts
├── dist/                      # Compiled JavaScript files
├── package.json
└── tsconfig.json
```

## Architecture Layers

### 1. Routes Layer (`routes/`)
- Defines API endpoints
- Maps HTTP requests to controllers
- Handles route-specific middleware

**Example:**
```typescript
// routes/profile.routes.ts
router.get('/', profileController.getProfile);
```

### 2. Controllers Layer (`controllers/`)
- Handles HTTP requests and responses
- Validates input
- Calls appropriate services
- Returns formatted responses

**Example:**
```typescript
// controllers/profile.controller.ts
getProfile = (req: Request, res: Response): void => {
  const profile = this.profileService.getProfile();
  res.json(profile);
};
```

### 3. Services Layer (`services/`)
- Contains business logic
- Data manipulation
- Can interact with databases or external APIs
- Reusable across different controllers

**Example:**
```typescript
// services/profile.service.ts
getProfile(): Profile {
  return { /* profile data */ };
}
```

### 4. Types Layer (`types/`)
- TypeScript interfaces and types
- Shared type definitions
- Ensures type safety across the application

## API Endpoints

All endpoints are prefixed with `/api`:

- `GET /api/health` - Health check
- `GET /api/profile` - Get profile information
- `GET /api/projects` - Get projects list
- `GET /api/experience` - Get work experience
- `GET /api/skills` - Get skills list

## Adding New Features

To add a new feature:

1. **Create Service** (`services/`)
   - Implement business logic
   - Return data structure

2. **Create Controller** (`controllers/`)
   - Inject service
   - Handle HTTP requests/responses

3. **Create Routes** (`routes/`)
   - Define routes
   - Map to controller methods

4. **Update Main Router** (`routes/index.ts`)
   - Register new routes

5. **Add Types** (`types/`)
   - Define TypeScript interfaces if needed

## Benefits of This Structure

- **Separation of Concerns**: Each layer has a specific responsibility
- **Maintainability**: Easy to locate and modify code
- **Testability**: Each layer can be tested independently
- **Scalability**: Easy to add new features without affecting existing code
- **Type Safety**: TypeScript types ensure consistency
