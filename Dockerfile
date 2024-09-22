# Use an official Node.js, and it should be version 16 and above
FROM node:20-alpine
# Set the working directory in the container
WORKDIR /app
# Copy package.json and pnpm-lock.yaml
COPY . .
# Install app dependencies using PNPM
RUN npm install
# Build the TypeScript code
RUN npm run build
# Expose the app
EXPOSE 3000
# Start the application
CMD ["node", "App.js"]