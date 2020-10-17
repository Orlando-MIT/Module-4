FROM node:carbon

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 9090

CMD ["node","index.js"]