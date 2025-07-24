FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /usr/local/bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENV SERVER_PORT=3000
ENV RABBIT_CONNECTION_STRING=amqp://guest:guest@rabbitmq:5672
ENV DATABASE_URL=postgresql://payment:payment@postgres:5432/payment?schema=main
ENV NODE_ENV=production

CMD ["docker-entrypoint.sh", "node", "dist/src/core/server/main.server.js"]
