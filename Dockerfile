FROM node:latest
WORKDIR /usr/src/accordion-react
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]