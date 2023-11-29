# syntax=docker/dockerfile:1

ARG NODE_VERSION=18

FROM node:${NODE_VERSION} as builder

# Specify all necessary arguments at build time
ARG VITE_API_HOST=http://localhost:8000

# Use production node environment by default.
ENV NODE_ENV=development

# Map build arguments to environment variable
ENV VITE_API_HOST=${VITE_API_HOST}


WORKDIR /app

COPY package.json tsconfig.json tsconfig.node.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

# Use nginx as a service image
FROM nginx:latest

COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose the port that the application listens on.
EXPOSE 80