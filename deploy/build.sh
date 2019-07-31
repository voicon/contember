#!/bin/sh
set -e

ECR="831119889470.dkr.ecr.eu-central-1.amazonaws.com"

ecr-login

APP=$1
if [$APP != ""]; then
  PATH = "$APP/"
else
  PATH = ""
fi

REPO="mangoweb/app/${APP}cms-admin"
docker build -t "$ECR/$REPO:$VERSION" ./mangoweb/admin
docker tag "$ECR/$REPO:$VERSION" "$ECR/$REPO:latest"
docker push "$ECR/$REPO"

REPO="mangoweb/app/${APP}cms-api"
docker build -t "$ECR/$REPO:$VERSION" ./mangoweb/cms-api
docker tag "$ECR/$REPO:$VERSION" "$ECR/$REPO:latest"
docker push "$ECR/$REPO"
