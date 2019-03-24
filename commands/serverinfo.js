const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("***Informacje Servera***")
  .setColor("#ffffff")
  .setThumbnail(sicon)
  .addField("**nazwa Servera**",  message.guild.name)
  .addField("stworzony w", message.guild.createdAt.toDateString(), true)
  .addField("ty dołonczyłeś", message.member.joinedAt.toDateString(), true)
  .addField("Całkowita liczba osub", message.guild.memberCount, true)
  .addField("liczba graczy", message.guild.members.filter(u => u.user.bot === false).size, true)
  .addField("liczba botów", message.guild.members.filter(u => u.user.bot === true).size, true);
   return message.channel.send(serverembed);
  

}

module.exports.help = {

  name:"serverinfo"

}
