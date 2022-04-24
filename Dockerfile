# Install dependencies only when needed
FROM node:14-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:14-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./
RUN npm run build

# Production image, copy all the files and run serve
FROM node:14-alpine AS runner
WORKDIR /app
COPY --from=builder /app/build ./build

EXPOSE 8080

CMD ["npx", "serve", "-s", "/app/build", "-p", "8080"]