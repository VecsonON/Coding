
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



  let inviteEmbed = new Discord.RichEmbed()

  .setDescription("***ZAPRO***")

  .setColor("#3ad1b2")

  .addField("**Stworzono Link do autorizacji** ", "[CODING BOT](https://discordapp.com/oauth2/authorize?client_id=537264545006092296&permissions=805694551&scope=bot)")
  .addField("**Link na server Twórców BOTA**", "[SERVER BOTA](https://discord.gg/kwSTWVp)");


  return message.channel.send(inviteEmbed);

};



module.exports.help = {

  name:"zapro",

};
