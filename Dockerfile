FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]