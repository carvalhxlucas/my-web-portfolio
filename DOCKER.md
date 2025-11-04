# Docker Setup Guide

This guide explains how to use Docker to run the portfolio application.

## Overview

The application is containerized using Docker Compose with two services:
- **backend**: Node.js + Express API server
- **frontend**: Angular application served via Nginx

## Quick Start

### Production Mode

```bash
docker-compose up --build
```

Access the application at:
- Frontend: http://localhost
- Backend API: http://localhost:3000

### Development Mode

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Access the application at:
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

## Docker Compose Files

### docker-compose.yml (Production)
- Multi-stage builds for optimized images
- Backend runs compiled JavaScript
- Frontend served via Nginx
- Health checks enabled
- No volume mounts (uses built images)

### docker-compose.dev.yml (Development)
- Development images with hot-reload
- Volume mounts for live code updates
- Backend uses ts-node-dev for auto-reload
- Frontend uses Angular dev server
- Full source code access

## Docker Images

### Backend Image
- **Base**: node:20-alpine
- **Build stages**: 
  - Builder: Compiles TypeScript
  - Production: Runs compiled code
- **Port**: 3000
- **Health check**: `/api/health`

### Frontend Image
- **Base**: node:20-alpine (builder) + nginx:alpine (production)
- **Build stages**:
  - Builder: Compiles Angular application
  - Production: Serves static files via Nginx
- **Port**: 80 (production) or 4200 (development)
- **Nginx config**: Includes API proxy to backend

## Networking

Both services run on the same Docker network (`portfolio-network`), allowing:
- Frontend to communicate with backend via service name
- Nginx proxy configuration to route `/api` requests to backend
- Isolated network for security

## Environment Variables

### Backend
- `NODE_ENV`: `production` or `development`
- `PORT`: Server port (default: 3000)

### Frontend
- Development mode uses Angular CLI
- Production mode uses Nginx with static files

## Useful Commands

### Using Makefile
```bash
make build    # Build images
make up       # Start production
make dev      # Start development
make down     # Stop services
make logs     # View logs
make clean    # Remove everything
```

### Using Docker Compose
```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build -d

# Stop and remove volumes
docker-compose down -v
```

## Troubleshooting

### Port Already in Use
If port 80 or 3000 is already in use, modify the ports in `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Change 80 to 8080
```

### Container Won't Start
1. Check logs: `docker-compose logs`
2. Verify Docker is running: `docker ps`
3. Check disk space: `docker system df`
4. Rebuild: `docker-compose up --build`

### API Not Working
1. Verify backend is running: `docker-compose ps`
2. Check backend logs: `docker-compose logs backend`
3. Test health endpoint: `curl http://localhost:3000/api/health`
4. Verify Nginx proxy config in `frontend/nginx.conf`

### Development Hot-Reload Not Working
1. Ensure using `docker-compose.dev.yml`
2. Check volume mounts are correct
3. Verify file permissions
4. Restart containers: `docker-compose restart`

## Image Optimization

The production images use multi-stage builds to:
- Reduce final image size
- Separate build dependencies from runtime
- Use Alpine Linux for smaller images
- Only include necessary files

## Security Considerations

- Containers run as non-root user (backend)
- Health checks monitor service status
- Network isolation via Docker networks
- No sensitive data in images (use environment variables)
- Production builds exclude dev dependencies

## Deployment

For production deployment:

1. Build images:
```bash
docker-compose build
```

2. Tag images for registry:
```bash
docker tag portfolio-backend:latest your-registry/portfolio-backend:latest
docker tag portfolio-frontend:latest your-registry/portfolio-frontend:latest
```

3. Push to registry:
```bash
docker push your-registry/portfolio-backend:latest
docker push your-registry/portfolio-frontend:latest
```

4. Update `docker-compose.yml` to use registry images
5. Deploy using your container orchestration platform
