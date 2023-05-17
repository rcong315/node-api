docker build -t node-api .
docker tag node-api:latest 040508513186.dkr.ecr.us-west-2.amazonaws.com/node-api:latest
docker push 040508513186.dkr.ecr.us-west-2.amazonaws.com/node-api:latest
