#!/bin/sh
set -e

echo "Waiting for Postgres..."

until nc -z -v -w30 postgres 5432
do
  echo "Waiting for database connection..."
  sleep 2
done

echo "Postgres is up"

until nc -z -v -w30 rabbitmq 15672
do
  echo "Waiting for RabbitMQ Management UI..."
  sleep 2
done

echo "RabbitMQ UI is up!"

echo "running migrations and seed"

npx prisma migrate deploy
npm run seed:prd

echo "Starting app..."

exec "$@"
