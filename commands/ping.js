var Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'Ping Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'PING')) {
            message.channel.send({embed:{
                title:"Pong!",
                description:`${Date.now() - message.createdTimestamp}` + "ms",
                color: 0x17A589
            }})
        }
    },
};