FROM node:14.10.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN CI=true
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
