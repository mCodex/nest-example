# NestJS Example

My sample NestJS project featuring:

- TypeORM
- PostgresSQL
- Docker
- Docker Volumes to persist database into project's folder

## Setting Up

First of all, create an empty folder `dbdata` inside `docker` folder.

After that, make sure you have docker installed on your machine and then run:

```bash
docker compose up -d
```

After that you will be able to log in into your database. A default database `nestjs_sample` will be automatically created.

You can use any SQL client software application that supports PostgresSQL.

The default database's credentials are:

```
HOST: localhost:5432
USER: postgres
Password: postgres
DB: nestjs_sample
```

Then you must install the project's dependencies:

```bash
yarn
```

## Running the application

You can start the application using:

```bash
yarn start:dev
```

The API can be accessed in this URL:

http://localhost:3000

## Migrations

Migrations run automatically on every server's start/restart. If you want to create and run migrations without restarting the server, you just need to run:

```bash
yarn typeorm migration:run
```

Make sure the server is running when you create a new migration, because if you want to run migrations manually `ormconfig.json` reads the files from `dist` folder which is generated in runtime.
