var Discord = require('discord.js');
module.exports = {
    name: 'purge',
    description: 'Purge Command',
    execute (message) {
        var prefix = '*'
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("You do not have enough permissions!");
        let msg = message.content.toUpperCase();
    
        let cont = message.content.slice(prefix.length).split(" ");
        let args = cont.slice(1);
    
        let msg1 = message;
        let args1 = msg1.content.slice(prefix.length).split(/ +/);
        if (msg.startsWith(prefix + 'PURGE')) {
        if (isNaN(args[0])) return message.channel.send('**Please use a number! \nUsage: ' + prefix + 'purge <amount>**');

        message.delete();
        message.channel.bulkDelete(args[0])
            .then( messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages.**`).then( msg => msg.delete({ timeout: 10000})))
            .catch( error => message.channel.send(`**ERROR:** ${error.message}`));
        }
    },
};