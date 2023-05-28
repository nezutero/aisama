# Build the Docker image
build:
    docker build -t yuichan .

# Run the Docker container
run:
    docker run -p 3000:3000 yuichan

# Clean up Docker resources
clean:
    docker system prune -f

# Shortcut for building and running the container
start: build run
