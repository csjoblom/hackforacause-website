FROM node:12-alpine

RUN apk add --no-cache mariadb-dev make g++ linux-headers nodejs tzdata

WORKDIR /website

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install nuxt --global
RUN npm run build

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
