const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mascotas')
		.setDescription('vamos a pedir fotos de tus mascotas ❤️'),
	async execute(interaction) {
		await interaction.reply('Que estan haciendo tus mascotas?? mandanos una foto! 🐶🐱🐰🐴🦄🐦🐠');
	},
};