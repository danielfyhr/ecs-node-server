import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
export class CdkEcsTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const service =
      new cdk.aws_ecs_patterns.ApplicationLoadBalancedFargateService(
        this,
        "Hamburger-ECS-Service",
        {
          memoryLimitMiB: 512,
          desiredCount: 1,
          cpu: 256,
          circuitBreaker: { rollback: true },
          taskImageOptions: {
            containerPort: 1337,
            image: cdk.aws_ecs.AssetImage.fromAsset(
              path.join(__dirname, "hamburger-service"),
              { platform: cdk.aws_ecr_assets.Platform.LINUX_AMD64 }
            ),
          },
        }
      );
  }
}

const app = new cdk.App();

new CdkEcsTestStack(app, "Cdk-Ecs-Test-Stack");
