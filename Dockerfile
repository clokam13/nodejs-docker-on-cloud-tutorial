FROM node:17-alpine

# Create app directory 
WORKDIR /user/src/app

COPY package*.json ./

RUN npm install 

# Copy source code to container
COPY . .

EXPOSE 9900

CMD ["npm", "start"]

