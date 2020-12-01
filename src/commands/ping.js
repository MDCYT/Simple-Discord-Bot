
module.exports.run = (client, message, args, utils) => {

    const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; // Check if edited
    const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
    const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;

    message.channel.send(`Ping: ${latency} n\Api: ${apiLatency}`)
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
