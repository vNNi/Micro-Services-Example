#!/bin/sh
cd $(pwd)"/microservices/Fiap-order-services" && docker-compose up --build -d mysql nodejs && cd ../..
cd $(pwd)"/microservices/Fiap-favorites-services" && docker-compose up --build -d mysql nodejs && cd ../..
cd $(pwd)"/microservices/Fiap-product-services" && docker-compose up --build -d mysql nodejs && cd ../..
cd $(pwd)"/microservices/Fiap-report-services" && docker-compose up --build -d mysql nodejs && cd ../..
cd $(pwd)"/microservices/Fiap-shipping-services" && docker-compose up --build -d mysql nodejs && cd ../../
