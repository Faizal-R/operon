FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first to leverage Docker cache
COPY package*.json ./
RUN corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 7000
CMD ["node", "dist/main.js"]
