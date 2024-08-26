# Genera dependencias
FROM node:20.11.1-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# compila el proyecto
FROM node:20.11.1-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ejecuta el proyecto / crea la imagen
FROM node:20.11.1-alpine AS runner
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=prod
COPY --from=builder /app/dist ./dist
CMD [ "node","dist/main" ]
