FROM node:18-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends libc6 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g pnpm@latest

WORKDIR /app

COPY package.json ./
RUN pnpm install

COPY . .

ENV NODE_ENV=production
EXPOSE 4173

RUN pnpm build
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]

