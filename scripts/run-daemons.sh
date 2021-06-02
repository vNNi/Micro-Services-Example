#!/bin/sh
dir="/Users/komninakis/Projects/Fiap/Microservices/microservices-fiap/microservices"

cd $dir"/Fiap-order-services" && docker-compose up -d mysql nodejs
cd $dir"/Fiap-favorites-services" && docker-compose up -d mysql nodejs
cd $dir"/Fiap-product-services" && docker-compose up -d mysql nodejs
cd $dir"/Fiap-report-services" && docker-compose up -d mysql nodejs
