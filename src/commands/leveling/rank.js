const { SlashCommandBuilder } = require('discord.js');
const User = require('../../models/User');
const config = require('../../../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reset-data')
    .setDescription('[OWNER] Wipe all level data')
    .addBooleanOption(option =>
      option.setName('confirm')
        .setDescription('Type true to confirm')
        .setRequired(true)),
  
  async execute(interaction) {
    if (!require('../../utils/auth').isOwner(interaction)) {
      return interaction.reply({ content: "❌ Owner only!", ephemeral: true });
    }

    const confirmation = interaction.options.getBoolean('confirm');
    if (!confirmation) {
      return interaction.reply("❌ Confirmation failed!");
    }

    await User.deleteMany({ guildId: config.GUILD_ID });
    interaction.reply("✅ All level data has been reset!");
  }
};
