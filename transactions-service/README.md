<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Tools

- NestJS
    - NestJS is a framework for building efficient, scalable Node.js server-side applications. 
    - I have experience with Nest.js and express.js but I like Nest.js slightly better because it is more structured and easier to read for me quickly switching Spring Webflux and DDD/CQRS for work hahaha.
- Typescript
  -  Typescript is a superset of Javascript that compiles to plain Javascript.
- Postgres
  - Postgres is a relational database management system that emphasizes extensibility and SQL compliance.
- Prisma
      - Prisma is an ORM that allows you to interact with your database using typescript.
- Render
   - Render is a cloud provider that allows you to host your application and database.
   - to host my postgres database for this project.
- Jest
  - Jest is a testing framework that allows you to test your code.
  - I have experience with Jest and Junit for testing but could not get everything done in time.
- Swagger
  - Swagger is a tool that allows you to document your API.
  - I have experience with Swagger and OpenAPI for documenting API and was able to host some documentation and quickly test the API using it.
  - [Swagger link when deployed locally](http://localhost:3000/api#/)

### Prisma & Render
The database is hosted on Render, and the ORM used to develop API is Prisma.
Due to deploying this app is not required, and I only have 2 hours to get everything require done.
The API needs to be deployed locally. You will need to use the lock
.env file attached to the email to connect to the database using my secrets 
to connect to the database. This DB will be deleted after the interview,
but I know it is good practice to not share .env over github.
The project uses Prisma as an ORM and Render as hosting provider. 
If you want to set up your own DB and connect to the DB 
using your own secrets. You will need to install Prisma and setup your own database using these steps below, 

```bash
# install prisma
$ pnpm install prisma -g
# install prisma client
$ pnpm install @prisma/client
```
#### Then copy the contents of schema.prisma and delete the entire prisma folder, and replace it one you're about to create.

```bash
# create a new prisma project
$ prisma init

# generate the prisma client
$ prisma generate
```
## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
