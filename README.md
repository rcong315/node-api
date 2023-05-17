#Node.js CRUD API

The backend API is implemented with the JavaScript framework Node.js. Using deploy.sh, the application is Dockerized and pushed to an AWS ECR Repository. 
From there, the container is run on an AWS Lambda function with an API Gateway integration to expose the API endpoint at 
https://a15jnw3v2l.execute-api.us-west-2.amazonaws.com/default/

The frontend is implemented with the Vue.js framework. The dist/ directory is uploaded to AWS S3 and hosted from there as a static website. 

The data are car objects with fields id, make, model, and year.

Now you can create, update, and delete cars from the web app at http://node-website.s3-website-us-west-2.amazonaws.com/