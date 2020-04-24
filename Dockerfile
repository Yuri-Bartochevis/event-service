FROM node:12
WORKDIR /application
COPY package.json /application
RUN npm install
COPY . /application
CMD node app.js
EXPOSE 8080