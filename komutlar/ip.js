const discord = require("discord.js");

  exports.run = async (client, message, member) => {
message.channel.send("CS:GO Sunucu IP : 185.193.164.214").then(msg => msg.delete(15000));
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csgoip'],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Medusa CS:GO Sunucusunun IP Sini yazar',
  usage: '!ip'
};