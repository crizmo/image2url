const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const imgbb_upload = async (imagePath, imgbbKey) => {
    const form = new FormData();
    form.append('image', fs.createReadStream(imagePath));
    try {
        const response = await axios.post('https://api.imgbb.com/1/upload?key=' + imgbbKey, form, {
            headers: form.getHeaders()
        });
        // console.log('response', response);
        // console.log('response URL', response.data.data.image.url);
        // console.log('success');
        return response.data.data.image.url;
    } catch (error) {
        // console.log('error', error);
        throw new Error('Upload failed, please try again.');
    }
}

module.exports = imgbb_upload;