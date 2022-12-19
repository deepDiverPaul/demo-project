# ROOT DIR
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
# END OF ROOT BEER

# HELP
# This will output the help for each task

.PHONY: help
help: ## This is help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
# NO HELP BEYOND THIS POINT

# MAIN

-include .env
export

.PHONY: dev
dev: ## Starts the Dev-Server (with live update).
	@docker-compose up -d --build

#.PHONY: debug
#debug: ## Show logs of Frontend-container.
#	@docker-compose logs -f -t frontend

.PHONY: dev-stop
dev-stop: ## Stops all Server.
	@docker-compose down

.PHONY: dev-restart
dev-restart: dev-stop dev ## Restarts the Server.

.PHONY: dev-clean
dev-clean: ## Removes all docker volumes for a clean restart.
	@docker-compose down --rmi all --volumes --remove-orphans

.PHONY: build
build: ## Run production server.
	docker build --target build-stage -t simple-form-build .
	docker run -it --rm --detach --name simple-form-build simple-form-build
	docker cp simple-form-build:/app/dist ./dist
	docker stop simple-form-build

.PHONY: production
production: ## Run production server.
	docker build -t simple-form .
	docker run -it -p 4127:80 --rm --detach --name simple-form-production simple-form

.PHONY: production-stop
production-stop: ## Stop production server.
	docker stop simple-form-production
