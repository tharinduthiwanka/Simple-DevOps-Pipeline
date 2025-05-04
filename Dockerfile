# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy the application code
COPY . .

# Expose the port

# Run the application
CMD ["node", "index.js"]
