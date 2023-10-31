var Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Ban Command',
    execute (message) {
        var prefix = '*'
        let msg1 = message;
        let args1 = msg1.content.slice(prefix.length).split(/ +/);
        let command = args1.shift().toLowerCase();
        let cmd = command;
        if(cmd === 'ban'){
            if(!msg1.member.hasPermission("BAN_MEMBERS")) return msg1.channel.send("❌ You don't have permission to ban members.");
            let toBan = msg1.mentions.members.first();
            let reason = args1.slice(1).join(" ");
            if(!args1[0]) return msg1.channel.send('Please mention someone to ban');
            if(!toBan) return msg1.channel.send(`${args1[0]} is not a member.`);
            if(!reason) return msg1.channel.send('Specify a reason.');
    
            if(!toBan.bannable){
                return msg1.channel.send(':x: I cannot ban someone that is mod/admin. :x:');
            }
    
            if(toBan.bannable){
                let x = new Discord.MessageEmbed()
                .setTitle('Ban')
                .addField('Member Banned', toBan)
                .addField('Banned by', msg1.author)
                .addField('Reason', reason)
                .addField('Date', msg1.createdAt)
    
                msg1.channel.send(x);
                toBan.ban();
            }
        }
    },
};