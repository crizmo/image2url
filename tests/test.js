const tourl = require('../index');
// config the env that is in tests/.env
require('dotenv').config()

tourl.init({
    token: process.env.DISCORD_TOKEN,
    channel: "1058248935187173386"
});

tourl.upload('tests/kurizu.jpg', 'kurizu pfp').then(url => {
    console.log(url);
}); 