const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  var wUser = message.mentions.members.first();

  var wMember = message.guild.member(wUser);
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("***Nie znalezono Gracza***");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("***Brak Pozwoleń***");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("***Nie morzna go Zbanować!***");
await wMember.send(`dostałeś bana na **__${message.guild}__** zy powodem **${bReason}**! od admina:${message.author}`);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("***Ban***")
    .setColor("#bc0000")
    .addField("**Zbanowany Gracz:** ", `${bUser} `, true)
    .addField("**Zbanowany Przez:** ", `<@${message.author.id}>`, true)
    .addField("**Na Kanale**", message.channel, true)
    .addField("**Powód**", bReason, true);


    let incidentchannel = message.guild.channels.find(`name`, "coding-logs");
    if(!incidentchannel) return message.channel.send("Nie znalezono kanału incydentów");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

}



module.exports.help = {

  name:"ban"

}
