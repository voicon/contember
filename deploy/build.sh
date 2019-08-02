#!/bin/sh
set -e

ECR="831119889470.dkr.ecr.eu-central-1.amazonaws.com"

ecr-login

INSTANCE=$1

ECR_PATH=""
if ["$INSTANCE" == ""]; then
  INSTANCE="mangoweb"
else
  ECR_PATH="$INSTANCE/"
fi

REPO="mangoweb/app/${ECR_PATH}cms-admin"
docker build -t "$ECR/$REPO:$VERSION" ./instances/${INSTANCE}/admin
docker tag "$ECR/$REPO:$VERSION" "$ECR/$REPO:latest"
docker push "$ECR/$REPO"

REPO="mangoweb/app/${ECR_PATH}cms-api"
docker build -t "$ECR/$REPO:$VERSION" ./instances/${INSTANCE}/api
docker tag "$ECR/$REPO:$VERSION" "$ECR/$REPO:latest"
docker push "$ECR/$REPO"
