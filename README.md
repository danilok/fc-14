# Imersão 14 - Full Cycle

Este repositório é referente às aplicações desenvolvidas durante a imersão 14 que teve como objetivo implementar um sistema de rastreamento de veículos.

## Tecnologias abordadas

- Observabilidade
  - Prometheus
  - Grafana
- Banco de dados
  - MongoDB
  - MySQL
- Microsserviços
  - Go
- Mensageria
  - Apache Kafka
- Frontend
  - Next.js com React
  - React Server Componentes
  - Route Handler
  - Material UI
  - Socket.io
- Backend
  - Nest.js
  - Bull
  - Google Maps API
  - Prisma ORM
  - Socket.io

## Pré-requisitos

- docker
- API KEY do Google Maps API com os seguintes serviços
  - Directions
  - Places
  - Maps Javascript
- configuração do hosts para comunicação entre as aplicações
```
127.0.0.1 host.docker.internal
```

## Ordem de deploy das aplicações

Cada pasta no projeto representa um conjunto de aplicações que devem subir para tornar o sistema operacional:
- observabilidade
- kafka
- mysql
- nestjs
- go
- nextjs

