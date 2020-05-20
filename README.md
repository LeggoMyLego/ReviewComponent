# Project Name

> Reviews service

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Note

## Usage
npm install

Dev: npm run server

May have to modify reset-db to point to the right host


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 

- direnv 
# look into installing direnv
# direnv allow . 
# if you plan on using docker, you need a .env, so you can have both .envrc and .env
# Inside your .envrc put in dotenv and it loads into your environment your .env with export
# put this in your ~/.zshrc || ~/.bashrc (whichever shell your using) - eval "$(direnv hook bash)"

- .envrc (should contain dotenv) ## you only need dotenv in here. 
- .env (for docker)
Reviews -> .env
  HOST=[address to db]
  HOST_URL=[address to reviews]
  DB=[your db]
  DB_USER=[your user]
  DB_PASS=[your pass]
  
Proxy -> .env
  REVIEWS_URL=[address to reviews]
  GALLERY_URL=[address to gallery]
  PRODUCTS_URL=[address to products]

- Docker
To use run docker-compose build ( note you need proxy folder with a dockerfile)
then docker-compose up

or pull from my dockerhub

* Pull from stakashima21/reviews
* Pull from stakashima21/reviews-proxy
* Pull from stakashima21/mysql
# You need to cp a schema into there and run it directly
# to populate, go into your reviews and run npm run seed_db
# make sure to put your .env files in each container
# To run, use docker run --name reviews  --env-file .env -d -p 8080:8080 image_id




