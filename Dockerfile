FROM node:alpine

RUN apk update && apk add git

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

RUN mkdir /hollowbot /hollowbot/secrets

# Set working directory to project root so
# all the following commands are run relative to
# it
WORKDIR /hollowbot

# Install production dependencies
COPY package.json yarn.lock ./
RUN yarn --prod

# Copy runtime secrets
COPY ./secrets/ ./secrets/

# Copy envirnonment file written by deploy.js
COPY env.json ./

COPY . ./

CMD yarn start
