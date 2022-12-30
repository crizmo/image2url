const tourl = require('../index');
require('dotenv').config()

tourl.init({
    token: process.env.DISCORD_TOKEN,
    channel: process.env.DISCORD_CHANNEL
});

tourl.upload('tests/kurizu.jpg', 'kurizu pfp').then(url => {
    console.log(url);
});