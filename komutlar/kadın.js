const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "790514176761659392"); //buraya kadın rolünüzün id'sini koyun
  const male2 = message.guild.roles.find(r => r.id === "790514180380688435"); //buraya kadın rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "790514182188433409"); //buraya kadın rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "790514380063244298"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "790854423895080970"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "tikkk"); // örn (emoji => emoji.name === "siyah");
  if(!message.member.roles.array().filter(r => r.id === "790593583777972245")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
    c.addRole(male)
    c.addRole(male2)
    c.removeRole(misafir)
    const embed = new Discord.RichEmbed()
   .setDescription(`**<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** **<@&${male.id}> <@&${male2.id}> ** rolleri verildi. !`)
    .setColor("0xff5cf3")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   