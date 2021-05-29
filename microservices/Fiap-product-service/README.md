# Fiap-microservice-product

### Domain
From Product domain, created a micro service to expose their functionalities

### Setup

## Prerequisite

> Docker
> Node >= 14 (to run locally - without docker)

To install all project, follow:

1. npm install
2. docker-compose up -d mysql zookeeper
3. ./scripts/start-kafka.sh
4. ./scripts/create-topic-ordered.sh
5. ./scripts/create-topic-viewed.sh

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
4. node-rdkafka - Kafka abstraction lib
5. AVSC - Buffer parser
6. Node-config - Configuration file lib (from enviroment and yml)

