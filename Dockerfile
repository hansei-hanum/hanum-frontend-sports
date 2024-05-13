FROM node:18 AS builder

WORKDIR /app

COPY . .
RUN npm install -g pnpm && pnpm i

RUN pnpm run build


