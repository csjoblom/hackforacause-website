FROM node:12-alpine

RUN apk add --no-cache ca-certificates tzdata

WORKDIR /website

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install nuxt@2.10.0 --global
RUN npm run build

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
