const Discord = require("discord.js");
module.exports = {
  name: "poll",
  description: "Poll Command.",
  execute: async (message, args) => {
    var prefix = "*";
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        `You do not have permissions, ${message.author.username}.`
      );
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `You did not mention/give the ID of your channel!`
      );
    }
    var question = args.splice(1).join(' ');
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`New Poll!`)
      .setDescription(`${question}`)
      .setFooter(`${message.author.username} created this poll.`)
      .setColor(`RANDOM`);
    let msg = await message.guild.channels.cache.get(channel.id).send(Embed);
    await msg.react("👍");
    await msg.react("👎");
  },
};