<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/crizmo/img-to-url">
    <img src="https://cdn.discordapp.com/attachments/910210865683386408/1058270655625314344/Untitled_design.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Image-to-Url</h3>

  <p align="center">
    Convert images to urls
    <br />
    <a href="https://github.com/crizmo/img-to-url"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/crizmo/img-to-url">View Demo</a>
    ·
    <a href="https://github.com/crizmo/img-to-url/issues">Report Bug</a>
    ·
    <a href="https://github.com/crizmo/img-to-url/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href='#env-example'>Env Example</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Convert images to urls using discord bot. 
- How it works <br>
Images are sent to a discord channel that you specify. <br>
The bot will then get the proxy url of the image and then return it to you. <br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To use image to url you need to have the following:
- Discord bot 
- Discord server
- Bot token
- Channel id

Once that is done set the following in the .env file <br>

## Env Example
DISCORD_TOKEN = "your token here" <br>
The token of your bot. You can get it from https://discordapp.com/developers/applications/me <br><br>
DISCORD_CHANNEL = "channel id here" <br>
The channel id of the channel where you want to send the images.

<h4>Make sure you have the following permissions on the channel:</h4>
- Send Messages <br>
- Embed Links <br>
- Attach Files <br>

<h4>Make sure to invite the bot to the server with the following permissions:</h4>
- Send Messages <br>
- Embed Links <br>
- Attach Files <br>

Check env_example file for more info - <a href="/tests/.env_example">env_example</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

In order to run this project you need to have the following packages installed:
- discord.js
- dotenv
- fs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Make a discord bot in discord developer portal
2. Copy the token and paste it in the .env file named DISCORD_TOKEN
3. Invite the bot to your server
4. Get the channel id of the channel where you want to send the images
5. Paste the channel id in the .env file named DISCORD_CHANNEL
6. Install the required packages - discord.js, dotenv, fs
7. Install image-to-url using npm
   ```sh
   npm install image-to-url
   ```
8. Require the package in your main file
   ```JS
   const imgToUrl = require('image-to-url');
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Example of how to use the package:
```JS
const tourl = require('image-to-url');
require('dotenv').config()

tourl.init({
    token: process.env.DISCORD_TOKEN,
    channel: process.env.DISCORD_CHANNEL
});

tourl.upload('tests/kurizu.jpg', 'kurizu pfp').then(url => {
    console.log(url);
});
``` 

Note: 
1. tests/kurizu.jpg is the path to the image you want to send. <br>
2. kurizu pfp is the name of the image. <br>
3. The url will have the name that you specified. which in this case is kurizu pfp. <br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Add Changelog
- [ ] Add Tests
- [ ] Add Additional Templates w/ Examples
- [ ] Add Support for more image formats
- [ ] Documentation
    - [ ] Website
    - [ ] Examples
    - [ ] Wiki
- [ ] Add Support for more platforms

See the [open issues](https://github.com/crizmo/img-to-url/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Discord - ``Criz#1270`` <br>
Github - [https://github.com/crizmo/img-to-url](https://github.com/crizmo/img-to-url)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
