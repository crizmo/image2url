const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

let Config_Channel;
let Config_Token;

const SetupInit = async ({ token, channel }) => {
    if (!token) throw new Error('No token provided');
    if (!channel) throw new Error('No channel provided');
    Config_Channel = channel;
    Config_Token = token;
}

const FileUpload = async (filePath, imageText) => {
    return new Promise(async (resolve, reject) => {
        await client.login(Config_Token);
        if (!require('fs')) throw new Error('No fs module found , Did you install it?');
        fs.readFile(filePath, async (err, data) => {
            const imageExtensions = /\.(jpe?g|png|gif|bmp)$/i;

            if (imageExtensions.test(filePath)) {
              const fileExtension = filePath.match(imageExtensions)[0];
              imageText += fileExtension;
            }

            if (err)
                return reject(err);
            await client.channels.fetch(Config_Channel).then(async (channel) => {
                await channel.send({
                    files: [{
                        attachment: data,
                        name: imageText
                    }],
                    content: imageText
                });
            }).then(async () => {
                console.log('File uploaded');
                await client.channels.fetch(Config_Channel).then(async channel => {
                    let msgs = await channel.messages.fetch({ limit: 2 });
                    let url = msgs.first().attachments.first().url;
                    resolve(url);
                });
            });
        });

    });
}

module.exports.init = SetupInit;
module.exports.upload = FileUpload;