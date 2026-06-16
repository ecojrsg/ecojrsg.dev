# Stage 1: Build the Astro application
FROM node:22-alpine AS build

# Enable Corepack to use pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the project (generates the static site in the /app/dist directory)
RUN pnpm run build

# Stage 2: Serve the static site using Nginx
FROM nginx:alpine

# Copy the static build output from the build stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to access the site
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
