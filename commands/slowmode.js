var Discord = require('discord.js');
module.exports = {
    name: "slowmode",
    description: "Set the slowmode for the channel!",
    execute: async (message, args) => {
      if (!args[0])
        return message.channel.send(
          `You did not specify the \`time\` in \`seconds\` you want to set this \`channel's slow mode\` too!`);
      if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
      if (args[0] > 21600) return message.channel.send(`Please set the time less than 6h (21600s).`)
      if (args[0] < 0) return message.channel.send(`Please set the time to atleast 0s.`)
      message.channel.setRateLimitPerUser(args[0]);
      message.channel.send(
        `Set the slowmode of this channel too **${args[0]}** seconds.`
      );
    },
  };