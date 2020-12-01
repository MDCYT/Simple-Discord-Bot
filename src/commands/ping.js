
const {MessageEmbed} = require("discord.js")

module.exports.run = async (client, message, args, utils) => {

  const msg = await message.channel.send('`Pinging...`');

    const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; // Check if edited
    const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;

    msg.edit('Latency ' + latency);

}



module.exports.help = {
    aliases: ['peng', 'pepo', 'OHMYPING'],
    name: 'ping',
    description: 'pong!',
    usage: 'PREFIXping'
}


module.exports.config = {
    args: false, 
    restricted: false, 
    category: 'Utils'
}
