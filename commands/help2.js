var Discord = require('discord.js');
module.exports = {
    name: 'help2',
    description: 'Help Page 2 Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg === prefix + 'HELP2'){
            message.channel.send({embed:{
                title:"Help Page 2",
                description:"2nd page of the help list for the NeonSploit bot! Prefix: [*].",
                color: 0x17A589,
                fields:[
                    {
                        name:"*tempmute <person> <time> <reason>",
                        value:"Temporarily mutes the person you ping for the amount of time you set.",
                        inline:false
                    },
                    {
                        name:"*mute <person> <reason>",
                        value:"Mutes the person you ping.",
                        inline:false
                    },
                    {
                        name:"*unmute <person> <reason>",
                        value:"Unmutes the person you ping.",
                        inline:false
                    },
                    {
                        name:"*8ball <question>",
                        value:"*Truthfully* answers your question.",
                        inline:false
                    },
                    {
                        name:"*userinfo <person>",
                        value:"Shows you info about the person you pings discord account.",
                        inline:false
                    },
                    {
                        name:"*dm <person> <message>",
                        value:"This bot DMs the person with the set message.",
                        inline:false
                    },
                    {
                        name:"*slowmode <time>",
                        value:"Set the slowmode for the channel in seconds, setting it to 0 turns slowmode off.",
                        inline:false
                    },
                    {
                        name:"*announce <channel id> <announcement>",
                        value:"Announce something in a channel.",
                        inline:false
                    },
                    {
                        name:"*poll <channel> <question>",
                        value:"Creates a poll for you and your server to answer.",
                        inline:false
                    },
                    {
                        name:"ㅤ",
                        value:"Do \"*help3\" to get page 3 of the help.",
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