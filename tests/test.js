const image2url = require('../index');
require('dotenv').config()


// Discord upload

image2url.init({
    token: process.env.DISCORD_TOKEN,
    channel: process.env.DISCORD_CHANNEL
});

image2url.upload('tests/kurizu.jpg', 'kurizu pfp').then(url => {
    console.log(url);
});


// Imgbb upload
const imagePath = 'tests/kurizu.jpg';

image2url.imgbb_upload(imagePath, process.env.IMG_BB_KEY)
    .then((url) => {
        console.log('Image uploaded successfully. URL:', url);
    })
    .catch((error) => {
        console.error('Image upload failed with error:', error);
    });