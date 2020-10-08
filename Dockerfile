FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 3000