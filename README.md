# ECS node server

A node server deployed on AWS ECS with Application Load Balancer and Fargate. Infrastructure managed with CDK. Uses the [ApplicationLoadBalancedFargateService construct](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedFargateService.html).

## Deployment

You need CDK installed (npm install -g aws-cdk)

```
npm install -g aws-cdk
```

The docker image is built as a part of the deployment. I'm pretty sure you need to have docker cli.

## Commands

run `npm install` and then you can do

- `npm run deploy` Does everything! Compiles ts to js, builds docker image and deploys the service!
- `npm run build` Compiles ts to js
- `npm run test` runs unit tests on the CDK-stack

## Accessing the service

Public url is an output from the CloudFormation stack. You will see it in the output after running `npm run deploy`. Open the link in a browser.
