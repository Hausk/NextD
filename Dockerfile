FROM node:20-alpine3.18 as base

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "./server.js"]