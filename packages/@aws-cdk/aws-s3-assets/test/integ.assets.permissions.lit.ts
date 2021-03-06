import iam = require('@aws-cdk/aws-iam');
import cdk = require('@aws-cdk/core');
import path = require('path');
import assets = require('../lib');

class TestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const asset = new assets.Asset(this, 'MyFile', {
      path: path.join(__dirname, 'file-asset.txt')
    });

    /// !show
    const group = new iam.Group(this, 'MyUserGroup');
    asset.grantRead(group);
    /// !hide
  }
}

const app = new cdk.App();
new TestStack(app, 'aws-cdk-asset-refs');
app.synth();
