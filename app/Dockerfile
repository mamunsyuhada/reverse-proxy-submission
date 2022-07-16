# Base on offical Node.js Alpine image
FROM node:alpine
# Set working directory
WORKDIR /usr/app
RUN yarn install
COPY ./ ./
USER node
EXPOSE 8000
CMD [ "yarn", "start" ]