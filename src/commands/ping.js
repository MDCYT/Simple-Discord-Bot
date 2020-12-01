
module.exports.run = (client, message, args, utils) => {

    message.channel.send('pong, wow i am a smart bot.')

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
