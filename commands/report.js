const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nie Znalezono Gracza");
    let rreason = args.join(" ").slice(22);
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#15f153")
    .addField("Zreportowano: ", `${rUser} Z ID: ${rUser.id}` , true)
    .addField("Na kanale: ", message.channel, true)
    .addField("Zreportowano Przez: ", `${message.author} Z ID: ${message.author.id}` , true)
    .addField("Powód: ", rreason, true);
    let reportschannel = message.guild.channels.find(`name`, "coding-logs");
    if(!reportschannel) return message.channel.send("Nie mogę znaleźć kanału do reportów");
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}



module.exports.help = {

  name: "report"
}
