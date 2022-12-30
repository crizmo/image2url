const image2url = require('../index');
require('dotenv').config()

image2url.init({
    token: process.env.DISCORD_TOKEN,
    channel: process.env.DISCORD_CHANNEL
});

image2url.upload('tests/kurizu.jpg', 'kurizu pfp').then(url => {
    console.log(url);
});