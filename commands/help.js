var Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Help Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg === prefix + 'HELP'){
            message.channel.send({embed:{
                title:"Help",
                description:"Help list for the NeonSploit bot! Prefix: [*].",
                color: 0x17A589,
                fields:[
                    {
                        name:"*ping",
                        value:"Tells you your ping.",
                        inline:false
                    },
                    {
                        name:"*purge <number>",
                        value:"It deletes the amount of message in bulk you set.",
                        inline:false
                    },
                    {
                        name:"*kick <person>",
                        value:"Kicks the person you ping from the server.",
                        inline:false
                    },
                    {
                        name:"*warnings <person>",
                        value:"Tells you the amount of warnings that the person you ping has.",
                        inline:false
                    },
                    {
                        name:"*ban <person>",
                        value:"Bans the person you ping from the server.",
                        inline:false
                    },
                    {
                        name:"*warn <person> <reason>",
                        value:"Warns the person you ping.",
                        inline:false
                    },
                    {
                        name:"*clearwarns <person>",
                        value:"Clears the warns that the person you ping has.",
                        inline:false
                    },
                    {
                        name:"*uptime",
                        value:"Shows the uptime of the bot.",
                        inline:false
                    },
                    {
                        name:"*meme",
                        value:"Gives you a fresh meme.",
                        inline:false
                    },
                    {
                        name:"ㅤ",
                        value:"Do \"*help2\" to get page 2 of the help.",
                        inline:false
                    }
                ],
                timestamp: new Date(),
                footer: {
                    text:'This is the end of the list.',
                    icon_url: 'https://cdn.discordapp.com/attachments/758230746518650892/777425562858946591/NeonSploit_logo_transparent.png'
                }
            }})
        }
    },
};