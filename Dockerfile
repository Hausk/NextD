FROM node:20-alpine3.18 as base

WORKDIR /app

COPY package.json package-lock.json ./
COPY . .
RUN npm ci
RUN npx next build
COPY . .

CMD ["npx", "next", "start"]