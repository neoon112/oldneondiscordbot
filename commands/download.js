var Discord = require('discord.js');
module.exports = {
    name: 'download',
    description: 'Download Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'DOWNLOAD')) {
            message.channel.send({embed:{
                title:"NeonSploit Download!",
                description:`The download for NeonSploit is: .`, // exploit dl link
                color: 0x17A589
            }})
        }
    },
};
