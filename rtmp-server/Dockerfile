# This Dockerfile uses Docker Multi-Stage Build
#
# VERSION 0.1.0

# Stage 1 - Build
FROM ubuntu:18.04 AS builder
WORKDIR /build/nginx
RUN apt-get update && apt-get install -y build-essential libpcre3 libpcre3-dev libssl-dev
RUN apt-get install -y wget unzip tar

# Get RTMP Module sources (make this first for better caching, in case nginx version has to be bumped
RUN wget https://github.com/sergey-dryabzhinsky/nginx-rtmp-module/archive/dev.zip && unzip dev.zip

ARG nginx_version=1.17.2

# Get nginx sources & extract them
RUN wget http://nginx.org/download/nginx-${nginx_version}.tar.gz && tar -zxvf nginx-${nginx_version}.tar.gz

WORKDIR ./nginx-${nginx_version}

# build nginx with rtmp module
# Note: this nginx will be compiled without zlib, so no compression can be used.
# Since it does only work as rtmp server, it should not make any difference.
RUN ./configure --with-http_ssl_module --without-http_gzip_module --add-module=../nginx-rtmp-module-dev && make

RUN make install

# Stage 2 -  Deploy
FROM ubuntu:18.04

WORKDIR /usr/local/nginx/

COPY --from=builder /usr/local/nginx/ .
RUN apt-get update && apt-get install -y libssl-dev

EXPOSE 80
EXPOSE 1935

CMD /usr/local/nginx/sbin/nginx && /bin/bash