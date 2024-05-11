#!/bin/bash

POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydatabase
CONTAINER_NAME=my-postgres-container

echo "Inicio"

echo "Parando contêiner"
docker stop $CONTAINER_NAME > /dev/null 2>&1
sleep 1

echo "Removendo contêiner"
docker rm $CONTAINER_NAME > /dev/null 2>&1
sleep 1

echo "Criando contêiner"
docker run --name $CONTAINER_NAME -e POSTGRES_USER=$POSTGRES_USER -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD -e POSTGRES_DB=$POSTGRES_DB -p 5432:5432 -d postgres > /dev/null 2>&1
sleep 2

echo "Criando migrations"
npm run migrations  > /dev/null 2>&1
sleep 2

echo "Criando seeds"
npm run seeds > /dev/null 2>&1
sleep 1
