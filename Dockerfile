FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

RUN apt-get update && apt-get install -y netcat-openbsd && apt-get clean

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /usr/local/bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENV NODE_ENV=production
ENV SERVER_PORT=3001
ENV RABBIT_CONNECTION_STRING=amqp://guest:guest@rabbitmq:5672
ENV DATABASE_URL=postgresql://payment:payment@postgres:5432/payment?schema=main

CMD ["docker-entrypoint.sh", "node", "dist/src/core/server/main.server.js"]
