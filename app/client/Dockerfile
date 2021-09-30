FROM node:12.16.3-alpine3.9

#Unfortunately, create-react-app currently has a bug that prevents it from running correctly in a docker container.  Create-react-app does have an open issue tracking this:
#so add this line 

ENV CI=true 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]