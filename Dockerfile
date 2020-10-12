FROM node:14.10.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
EXPOSE 3000
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]
CMD ["npm", "start"]
