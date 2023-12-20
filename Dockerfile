FROM node:20-alpine3.18 as base

WORKDIR /app

COPY package.json package-lock.json ./
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]