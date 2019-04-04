#!/usr/bin/env bash

docker-compose down && docker rmi $(docker image ls | grep usedcar | awk '{ print $3 }')

