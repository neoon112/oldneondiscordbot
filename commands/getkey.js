var Discord = require('discord.js');
module.exports = {
    name: 'getkey',
    description: 'GetKey Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'GETKEY')) {
            message.channel.send({embed:{
                title:"NeonSploit Key!",
                description:`To get the key go to .`,
                color: 0x83B935
            }})
        }
    },
};
