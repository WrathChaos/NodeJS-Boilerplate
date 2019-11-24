FROM node:10.5.0-slim

COPY package.json package.json
RUN npm install
RUN npm i babel-cli -g --save

COPY . .

CMD ["node", "index.js"]