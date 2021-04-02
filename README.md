Slack Channel Created notifier
=============================

+ TODO: Externalize `.env` variables so that the app can be hosted and handle as many channel created notification as needed.


Bolt app template
=================

This project was created using the [Bolt app template](https://slack.dev/bolt) framework that lets you build JavaScript-based Slack apps in a flash.


Usage for development
=====================

1. Go to `https://api.slack.com/apps` and create a new App with name `Channel Created notifier` for your workspace.
1. Run `docker build -t jdewinne/slack-channel-created:0.0.1 .`
1. Run `docker run -p 3000:3000 -e SLACK_SIGNING_SECRET=yoursecret -e SLACK_BOT_TOKEN=yourtoken -e PORT=3000 -e SLACK_CHANNEL_ID=TheFomoChannelId jdewinne/slack-channel-created:0.0.1`

Env variables
=============

1. SLACK_SIGNING_SECRET: `https://api.slack.com/apps` > `Channel Created Notifier` > `Basic Information` > `App Credentials` > `Signing Secret`
1. SLACK_BOTH_TOKEN: `https://api.slack.com/apps` > `Channel Created Notifier` > `OAuth & Permissions` > `Bot User OAuth Token`
1. PORT: The port of your choice, default `3000`
1. SLACK_CHANNEL_ID: Open your slack workspace in your browser, and open the channel where you expect the fomo messages to appear. In the address bar,  `https://app.slack.com/client/<ID_ONE>/<ID TWO>`, `ID TWO` will be the channel id.


Usage in production on-prem
===========================

1. kURL
1. Kots