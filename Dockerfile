FROM node:latest

ENV NODE_ENV=production

RUN mkdir /hollowbot /hollowbot/secrets

# Set working directory to project root so
# all the following commands are run relative to
# it
WORKDIR /hollowbot

# Copy runtime secrets
COPY ./secrets/ ./secrets/

# Copy envirnonment file written by deploy.js
COPY env.json ./

# Install production dependencies
COPY package.json yarn.lock ./
RUN yarn --prod

RUN mkdir ./scripts
COPY ./scripts ./scripts/

CMD yarn start
