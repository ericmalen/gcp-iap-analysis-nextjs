FROM node:21.5.0-alpine3.18
COPY . /app
WORKDIR /app
RUN npm install
CMD npm run dev