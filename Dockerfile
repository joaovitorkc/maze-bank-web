# Stage 1
FROM node:20 AS builder

WORKDIR /app

COPY ./package* ./

RUN npm ci

COPY ./src ./src

COPY ./public ./public

COPY vite.config.js ./

COPY tailwind.config.js ./

COPY postcss.config.js ./

COPY index.html ./

ARG VITE_API_URL

env VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2
FROM node:20 AS release

WORKDIR /app

COPY ./package* ./

RUN npm ci

COPY --from=builder /app/dist ./dist

CMD ["npm", "run", "start"]
