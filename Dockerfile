# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json ./

# Install the project dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the project for production
RUN yarn build

COPY .next ./next

CMD ["yarn", "run", "dev"]

