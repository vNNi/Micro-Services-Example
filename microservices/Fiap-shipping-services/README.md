# Fiap-shipping-service

### Domain
From Shipping domain, created a micro service to expose their functionalities

### Setup

## Prerequisite

> Docker
> Node >= 14

To install all project, follow:

1. npm install
2. docker-compose up -d mysql zookeeper
3. ./scripts/start-kafka.sh

### Run migrations

Inside docker or with mysql configured in you machine, run:

> `./node_modules/knex/bin/cli.js migrate:latest --esm`

### Run seeds

> `./node_modules/knex/bin/cli.js seed:run --esm`

### Technologies

1. Javascript - Programming language
2. Express - Server framework
4. Mysql - Data base/Repository
3. knex - ORM for mysql
6. Node-config - Configuration file lib (from enviroment and yml)

