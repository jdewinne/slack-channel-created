Slack Channel Created notifier
=============================

This app simplifies the Slack Channel Fear of missing out. You simply create a single channel in your Slack workspace and invite everyone of the org to that channel. The bot will post a message in there, each time a new channel is created.


Bolt app template
=================

This project was created using the [Bolt app template](https://slack.dev/bolt) framework that lets you build JavaScript-based Slack apps in a flash.


Usage for development
=====================

1. Go to `https://api.slack.com/apps` and create a new App with name `Channel Created notifier` for your workspace.
1. Run `docker build -t jdewinne/slack-channel-created:0.0.1 .`
1. Run `docker run -p 3000:3000 -e SLACK_SIGNING_SECRET=yoursecret -e SLACK_BOT_TOKEN=yourtoken -e PORT=3000 -e SLACK_CHANNEL_ID=TheFomoChannelId jdewinne/slack-channel-created:0.0.1`
1. Use something like `ngrok` to expose your dev environment to the public and accessible by Slack API.

Env variables
=============

1. SLACK_SIGNING_SECRET: `https://api.slack.com/apps` > `Channel Created Notifier` > `Basic Information` > `App Credentials` > `Signing Secret`
1. SLACK_BOTH_TOKEN: `https://api.slack.com/apps` > `Channel Created Notifier` > `OAuth & Permissions` > `Bot User OAuth Token`
1. PORT: The port of your choice, default `3000`
1. SLACK_CHANNEL_ID: Open your slack workspace in your browser, and open the channel where you expect the fomo messages to appear. In the address bar,  `https://app.slack.com/client/<ID_ONE>/<ID TWO>`, `ID TWO` will be the channel id.


Usage in production on-prem
===========================

For production setups, we make use of Replicated [kots](https://kots.io/).
1. kURL: Use the `kurl-installer.yaml` in combination with letsencrypt for tls.
   The deployment of the `ClusterIssuer` is not part of the kots app. See also this [tutorial](https://projectcontour.io/guides/cert-manager/#deploy-the-lets-encrypt-cluster-issuer).
1. GKE: HttpLoadBalancing is done via the [GKE HttpLoadBalancing addon](https://cloud.google.com/kubernetes-engine/docs/how-to/load-balance-ingress#gcloud).