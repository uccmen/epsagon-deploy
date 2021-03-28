# epsagon-deploy

epsagon-deploy is a simple monorepo that consists of multiple packages that's managed by [lerna](https://github.com/lerna/lerna).

The serverless app resides inside `/app`.

This project has 2 PRs created with Github Action workflow performed on each to demonstrate total deploy time when epsagon is enabled/disabled.

It is noticeable that webpack compilation time took longer when epsagon is enabled as seen in the Github Action logs.

To reproduce the workflows triggered, simply fork this project, set these secrets in your repository, and create PRs with similar changes.

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_SESSION_TOKEN // optional, required if you're using assumed role
AWS_REGION
EPSAGON_TOKEN
STAGE_NAME // can be your name, helps to identify your app in AWS lambda
```
