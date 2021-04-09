// Require the Bolt package (github.com/slackapi/bolt)
const { App, ExpressReceiver } = require("@slack/bolt");
var _ = require("lodash");
var events = [];

// Create a Bolt Receiver
const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  receiver: receiver
});

app.event("channel_created", ({ event, context }) => {
  try {
    if (!_.includes(events, event.channel.id)) {
      const result = app.client.chat.postMessage({
        token: context.botToken,
        channel: process.env.SLACK_CHANNEL_ID,
        text: `A new channel was created: <#${event.channel.id}> 🎉 Ready to join the FOMO?.`
      });
      console.log(result);
      events.push(event.channel.id);
    } else {
      console.log("Event already processed.");
    }
  } catch (error) {
    console.error(error);
  }
});

// Other web requests are methods on receiver.router
receiver.router.get('/', (req, res) => {
  // You're working with an express req and res now.
  res.status(200).send();
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
