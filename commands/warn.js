
const Discord = require("discord.js");

const fs = require("fs");


let warns = JSON.parse(fs.readFileSync("./warny.json", "utf8"));





module.exports.run = async (bot, message, args) => {



  //!warn @me <reason>

  var wUser = message.mentions.members.first();

  var wMember = message.guild.member(wUser);



  let muterole = message.guild.roles.find(c => c.name === "🔇 MUTED 🔇");

  //start of create role

  if(!muterole){

    try{

      muterole = await message.guild.createRole({

        name: "🔇 MUTED 🔇",

        color: "#585454",

        hoist: true,

        permissions: 1115137

      })

      message.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(muterole, {

          SEND_MESSAGES: false,

          ADD_REACTIONS: false

        })

      })

    }catch(e){

      console.log(e.stack);

    };

  };



  if(!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");

  if(!args[0]) return errors.didntSpecifyUser(message);

  if(!wUser) return errors.cantFindUser(message, wUser);

  // if(wUser == message.member) return errors.cantWarnYourself(message);

  // if(wUser.hasPermission("MANAGE_GUILD")) return errors.equalPerms(message, wUser, "MANAGE_GUILD")

  let reason = args.slice(1).join(" ");

  if(!reason) return errors.noReason(message);



  if(!warns[wUser.id]) warns[wUser.id] = {

    warns: 0

  };



  warns[wUser.id].warns++;



  fs.writeFile("./warny.json", JSON.stringify(warns), (err) => {

    if (err) console.log(err);

  });



  let warnEmbed = new Discord.RichEmbed()

  .setAuthor(message.author.username)

  .setColor("#fc6400")

  .addField("zwarnowany gracz", `<@${wUser.id}>`, true)

  .addField("na kanale", message.channel, true)

  .addField("Liczba Oszczerzeń:", warns[wUser.id].warns, true)

  .addField("Powód", reason, true);



  let warnchannel = message.guild.channels.find(c => c.name === "coding-logs");

  if(!warnchannel) return errors.cantFindWarnLogs(message);



  warnchannel.send(warnEmbed);



  if(warns[wUser.id].warns == 1){

    await wMember.send(`zostałeś zwarnowany na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);

    message.channel.send(`<@${wUser.id}> dostał warna`);

}



  if(warns[wUser.id].warns == 2){

    let mutetime = "10min";

    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> dostał muta`);

    await wMember.send(`dostałeś muta na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author} czas muta :10minut`);
    await wMember.send(`zostałeś zwarnowany na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);



    setTimeout(function(){

      wUser.removeRole(muterole.id)
      message.channel.send(`<@${wUser.id}> dostał unmuta`)

    })

  }

  if(warns[wUser.id].warns == 3){

    await wMember.send(`zostałeś zwarnowany na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);
      message.channel.send(`gracz ${wUser} dostał warna`)
  }
  if(warns[wUser.id].warns == 4){
        message.guild.member(wUser).kick(reason);
    await wMember.send(`zostałeś wykopany na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);
    await wMember.send(`zostałeś zwarnowany na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);
      message.channel.send(`gracz ${wUser} dostał warna`)
    message.channel.send(`gracz ${wUser} został wykopany`)




    let kickEmbed = new Discord.RichEmbed()

    .setDescription("***Kick***")
    .setColor("#e56b00")
    .addField("**wyzucony użytkownik: **", `${wUser}} ` ,true)
    .addField("**wyzucony przez: **", `<@${message.author.id}> `, true)
    .addField("**na kanale: **", message.channel, true)
    let kickChannel = message.guild.channels.find(`name`, "coding-logs");



    message.channel.send(kickEmbed);

  }

  if(warns[wUser.id].warns == 5){

    message.guild.member(wUser).ban(reason);

await wMember.send(`dostałeś bana na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);
await wMember.send(`zostałeś zwarnowany na **__${message.guild}__** zy powodem **${reason}**! od admina:${message.author}`);
    let banEmbed = new Discord.RichEmbed()

    .setDescription("***Ban***")
    .setColor("#bc0000")
    .addField("**Zbanowany Gracz:** ", `${wUser} `, true)
    .addField("**Zbanowany Przez:** ", `<@${message.author.id}>`, true)
    .addField("**Na Kanale**", message.channel, true)
      let incidentchannel = message.guild.channels.find(`name`, "coding-logs");

  }

};



module.exports.help = {

  name: "warn"

};
