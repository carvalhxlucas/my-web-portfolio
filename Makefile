.PHONY: help build up down logs restart clean dev prod

help:
	@echo "Available commands:"
	@echo "  make build     - Build Docker images"
	@echo "  make up        - Start services in production mode"
	@echo "  make dev       - Start services in development mode"
	@echo "  make down      - Stop services"
	@echo "  make logs      - View logs"
	@echo "  make restart   - Restart services"
	@echo "  make clean     - Stop and remove containers, volumes, and images"
	@echo "  make prod      - Build and start in production mode"

build:
	docker-compose build

up:
	docker-compose up -d

dev:
	docker-compose -f docker-compose.dev.yml up

prod:
	docker-compose up --build -d

down:
	docker-compose down

logs:
	docker-compose logs -f

restart:
	docker-compose restart

clean:
	docker-compose down -v --rmi all
