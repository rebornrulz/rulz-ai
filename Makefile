include .env

.PHONY: all

build:
	docker build -t rulz-ai .

run:
	export $(cat .env | xargs) && \
	docker stop rulz-ai || true && \
	docker rm rulz-ai || true && \
	docker run --name rulz-ai --rm -e OPENAI_API_KEY=${OPENAI_API_KEY} -p 3000:3000 rulz-ai

logs:
	docker logs -f rulz-ai

push:
	docker tag rulz-ai:latest ${DOCKER_USER}/rulz-ai:${DOCKER_TAG}
	docker push ${DOCKER_USER}/rulz-ai:${DOCKER_TAG}
