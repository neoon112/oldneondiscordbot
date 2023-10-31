var Discord = require('discord.js');
module.exports = {
    name: 'help3',
    description: 'Help Page 3 Command',
    execute (message) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg === prefix + 'HELP3'){
            message.channel.send({embed:{
                title:"Help Page 3",
                description:"3rd page of the help list for the NeonSploit bot! Prefix: [*].",
                color: 0x17A589,
                fields:[
                    {
                        name:"*download",
                        value:"Gives you the link to download NeonSploit.",
                        inline:false
                    },
                    {
                        name:"*getkey",
                        value:"Gives you the link to get a key for NeonSploit.",
                        inline:false
                    },
                    {
                        name:"*website",
                        value:"Gives you the website of NeonSploit.",
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