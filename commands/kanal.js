

const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
message.channel.send("```zakładka coding-info została stworzona```")
message.channel.send("```kanał coding-logs został stworzony```")



        let server = message.guild;

        let generalCat = server.channels.find(c => c.name === "coding-info");
      let welcomeChannel = server.channels.find(c => c.name === "coding-logs");

      if(!generalCat) await server.createChannel("coding-info", "category");

      if(!welcomeChannel) await server.createChannel("coding-logs", "text");



}
module.exports.help = {

  name:"kanal"

}
