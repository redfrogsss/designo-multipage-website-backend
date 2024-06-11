FROM node:20.6.1
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install
RUN npm build

EXPOSE 1337
ENV NODE_ENV=production
CMD ["npm", "start"]