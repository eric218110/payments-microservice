#!/bin/sh
set -e

echo "Waiting for Postgres..."

until nc -z -v -w30 postgres 5432
do
  echo "Waiting for database connection..."
  sleep 2
done

echo "Postgres is up - running migrations and seed"

npx prisma migrate deploy
npm run mock:seed

echo "Starting app..."

exec "$@"
