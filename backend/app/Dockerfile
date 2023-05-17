FROM amazon/aws-lambda-nodejs:16

COPY package*.json ./
RUN npm ci

COPY . .

CMD [ "index.handler" ]
