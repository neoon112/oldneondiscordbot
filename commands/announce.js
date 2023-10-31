var Discord = require('discord.js');

const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  execute: async (message, args) => {
    var prefix = '*'
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send("You do not have enough permissions!");
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too. Please put the channel ID in.`
      );
    let MSG = message.content
      .split(`${prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    const _ = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(`${MSG}`)
      .setColor("RANDOM");
    rChannel.send(_);
    message.delete();
  },
};
