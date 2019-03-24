const discord = require("discord.js");




module.exports.run = async (bot, message, args) => {
   message.delete();

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");

   if(!args[0]) return errors.didntSpecifyArgs(message);



   if(args[0] > 0 && args[0] < 5000) {

   message.channel.bulkDelete(args[0]).then(() => {

   message.channel.send(`usunięto ${args[0]} wiadomości!`).then(m => m.delete(5000));

 });

   }





   if(args[0] > 5000) {

     message.delete().then( async() => {



       let x = Math.round(args[0] / 5000) - 1;

       let z = Math.round(args[0] / 5000) * x;
     for(i=0; i<x; i++) {
         message.channel.bulkDelete(5000);

       }
       await message.channel.bulkDelete(args[0] - z);



     });

     message.channel.send(`usunięto ${args[0]} wiadomości!`).then(m => m.delete(5000));

   };



}
module.exports.help = {

  name:"clear"

}
