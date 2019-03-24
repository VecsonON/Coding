const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Nie znalezono gracza");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**brak pozwoleń**");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**nie można wyzucic tej osoby!**");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("***Kick***")
  .setColor("#e56b00")
  .addField("**wyzucony użytkownik: **", `${kUser} ` ,true)
  .addField("**wyzucony przez: **", `<@${message.author.id}> `, true)
  .addField("**na kanale: **", message.channel, true)
  .addField("**powód: **", kReason , true);
  let kickChannel = message.guild.channels.find(`name`, "coding-logs");
  if(!kickChannel) return message.channel.send("**nie można znaleźć kanału incydentów.**");
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}
module.exports.help = {

  name: "kick"
}
