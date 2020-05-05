# How to setup this Project

## What we need to run this project.

-nodejs
-docker
-docker-compose
-aws cli

## First, we need to mock AWS envronment.

``` sh
$ docker-compose -f ./localstack/docker-compose.yml up
$ aws --endpoint-url=http://localhost:4572 s3 mb s3://event-logo
$ aws --endpoint-url=http://localhost:4572 s3api put-bucket-acl --bucket event-logo --acl public-read
```

now we can see our bucket at: http://localhost:8085/#/infra
