FROM node:9.6.1-slim
ARG DEBIAN_FRONTEND=noninteractive

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install --production=false

# Bundle app source
COPY . /usr/src/app

EXPOSE 8600
CMD [ "yarn", "start" ]
