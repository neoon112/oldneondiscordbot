var Discord = require('discord.js');
const Command = require('../Settings/Command');

const answers = [
	'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Fuhgeddaboudit.',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!'
];

module.exports = {
    name: '8ball',
    description: '8ball Command',
	async execute(message, question) {
        return message.reply(question.join(' ') ?
            `\n` +
			`🎱 ${answers[Math.floor(Math.random() * answers.length)]} 🎱` :
			'🎱 Please ask a question!');
	}

};