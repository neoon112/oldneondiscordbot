var Discord = require('discord.js');
module.exports = {
    name: 'website',
    description: 'Website Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'WEBSITE')) {
            message.channel.send({embed:{
                title:"NeonSploit Website!",
                description:`This is NeonSploit's website: .`,
                color: 0x24E599
            }})
        }
    },
};
