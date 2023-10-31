var Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "meme",
    description: "Meme Command",
    async execute (message) { 
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'MEME')) {
            const subReddits = ["dankmemes", "meme", "memes"]
            const random = subReddits[Math.floor(Math.random() * subReddits.length)]
      
            const img = await randomPuppy(random);
      
            const memeEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`Your meme. From r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
      
            message.channel.send(memeEmbed);
        }
    }
}