import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as CdkEcsTest from "../lib/cdk-ecs-test-stack";

test("ECS Stack", () => {
  const app = new cdk.App();
  const stack = new CdkEcsTest.CdkEcsTestStack(app, "MyTestStack");
  const template = Template.fromStack(stack);
  template.hasResource("AWS::ElasticLoadBalancingV2::LoadBalancer", {});
  template.hasResource("AWS::ECS::Cluster", {});
  template.hasResource("AWS::ECS::Service", {});
  template.hasResource("AWS::ECS::TaskDefinition", {});
});
