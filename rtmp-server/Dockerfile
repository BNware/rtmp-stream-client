# This Dockerfile uses Docker Multi-Stage Build

# Stage 1 - Build
FROM ubuntu:18.04
WORKDIR /build/nginx
RUN apt-get update && apt-get install -y build-essential libpcre3 libpcre3-dev libssl-dev
RUN apt-get install -y wget unzip tar

# Get RTMP Module sources (make this first for better caching, in case nginx version has to be bumped
RUN wget https://github.com/sergey-dryabzhinsky/nginx-rtmp-module/archive/dev.zip && unzip dev.zip

ARG nginx_version=1.17.2

# Get nginx sources & extract them
RUN wget http://nginx.org/download/nginx-${nginx_version}.tar.gz && tar -zxvf nginx-${nginx_version}.tar.gz

WORKDIR ./nginx-${nginx_version}

# this is for busybox, but will end immediately when stopped by docker stop
#CMD exec /bin/sh -c "trap : TERM INT; (while true; do sleep 1000; done) & wait"
CMD /bin/bash

# Stage 2 -  Deploy
#FROM arm32v7/ubuntu:18.04
#
#EXPOSE 1935