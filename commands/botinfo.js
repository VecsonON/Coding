const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {


    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("***Info bota***")
    .setColor("#ffffff")
    .setThumbnail(bicon)
    .addField("**nazwa bota**", bot.user.username)
    .addField("**Opis** ", "*BOT Zrobiony Przez **Coding Studio***");
    return message.channel.send(botembed);
  


}



module.exports.help = {

  name:"botinfo"

}
