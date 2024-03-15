

const imgbb_upload = require('./functions/imgbb');
const { init, upload } = require('./functions/discord');

module.exports = {
    // discord 
    init,
    upload,

    // imgbb
    imgbb_upload
};

