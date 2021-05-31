# Base image
FROM node:14

# Maintainer name
LABEL maintainer="educative@educative.io"

# Copying angular folder from local directory to Educative directory
COPY angular /usr/local/educative/angular

# Installing Angular cli and node modules in angular directory
RUN     npm install -g @angular/cli &&\
        cd /usr/local/educative/angular &&\
        npm i

EXPOSE 3000