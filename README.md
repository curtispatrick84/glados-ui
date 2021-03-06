# glados-ui

A UI for assimilation orchestration

## Prerequisites

Ensure that you have `npm`, `yarn`, and `brunch` installed. `nvm` is highly recommended.

https://github.com/creationix/nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

# Install the latest stable version of node: https://nodejs.org/en/
nvm install 14.16.0

# Setup this version as the default.
nvm use 14.16.0
```

To install yarn and brunch

```
npm install -g yarn brunch
```

## Starting the GLaDOS UI

```
yarn start
```

Open http://localhost:8600/

## BONUS: building and running as a Docker container

https://docs.docker.com/docker-for-mac/install/

```
# Ignore the build warnings :-)
docker build -t glados .
docker run -d -p 8600:8600 --name glados glados:latest
```

Open http://localhost:8600/

When you are finished:

```
docker rm -vf glados
```
