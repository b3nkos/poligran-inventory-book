FROM node:16-alpine 

WORKDIR /app

COPY . .

ENV NODE_ENV development

RUN npm ci --include=dev

EXPOSE 3000

CMD [ "npm", "run", "start" ]