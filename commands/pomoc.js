
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let pomocembed = new Discord.RichEmbed()
  .setDescription("😄😄***POMOC***😄😄")
  .setColor("#fffddd")
  .addField("😃😃 Podstawowe 😃😃","😛😛 komendy 😛😛")
  .addField("❔**C++pomoc**❔","*Pokazuje Wszystkie Komendy*")
  .addField("💻**C++kanal**💻", "*tworzy kanały bota*")
  .addField("💻**C++serverinfo**💻", "*Pokazuje Informacje Servera*")
  .addField("🤖**C++botinfo**🤖", "*Pokazuje Informacje O Bocie*")
  .addField("⚠️**C++report <Gracz> <Powód>**⚠️","*Reportuje Wybranego Gracza*")
  .addField("👮👮‍ Moderacyjne 👮👮‍","‍👮‍👮 komendy 👮👮‍‍")
  .addField("📵**C++ban <Gracz> <Powód>**📵","*Banuje Wybranego Gracza*")
  .addField("❗️**C++Warn <Gracz> <Powód>**❗️","*Warnóje Wybranego Gracza*")
  .addField("📄 **C++Clear <Liczba Wiadomości>**📄 ","*Usuwa Wybraną liczbe Wiadomości*")
  .addField("📵**C++Kick <Gracz> <Powód>**📵","*kickuje Wybranego Gracza*")
  .addField("😆😆 Zabawne 😆😆","‍😆‍😆 komendy 😆😆‍‍")
  .addField("😅**C++Derp**😅","*Wipisuje Smiszną Wiadomość*")
  .addField("😅**C++test**😅 ","*Wipisuje Smiszną Wiadomość*")
  .addField("😅**C++gówno**😅","*Wipisuje Smiszną Wiadomość*")

 message.channel.send(pomocembed);

}
module.exports.help = {

  name:"pomoc"

}
