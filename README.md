# PWA Just Another Text Editor

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

PWA Just Another Text Editor is a text editor that runs in the browser.  This project was built to understand and practice Progressive Web Apps (PWA) criteria, feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, and employ offline function.  It solves the problem of wanting to create notes or code snippets with or without an internet connection so that they can be reliably retrieved for later use.  Some things learned throughout out PWA Just Another Text Editor were understanding the process of Service workers registering, installing, and activating to precache or cache resources, seeing the impact of webpacks on performance and load times while bundling JavaScript applications and extending support to many different assets such as images, fonts, and style sheets, and finally utilizing installability so that the application be opened from a desktop or mobile device home screen.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

Within the main directory, install dependencies by running "npm i' within the terminal of the main directory.  Because of the start script within the root package.json, this will also install all dependencies within the client and server folders.  Run "npm run build" to install webpack and output the dist folder containing the manifest.json file in the browser.  Then, connect to the server with the command "npm run start."

## Usage

To run this application from the terminal, enter "npm run start" to start the server.  The message "JATE app listening at http://localhost:3001!" will display within the console.  Press (ctrl + click) to follow the link and open up the application within the URL.  Once the application is loaded, texts can be entered using "console.log('Insert Text Here')."  Click off of the DOM window and the application's data will be saved in the IndexedDB.  Reload the page and the application's data will be retrieved from the IndexedDB.  Use chrome dev tools by right clicking in the window, clicking "inspect," and clicking "Console" from the drop down menu with the ">>" symbol. Here, the GET all from database method is consoled showing that data is retrieved from an IndexedDB database in the user's browser.  PUT to the database is consoled when storing or updating data in an IndexedDB database in the user's browser.  From the drop down menu, select Application to see the Manifest providing information about the web application.  Underneath Manifest, select "Service workers" to see that it's registered, installed, and activated.  Test the Offline capabability by clicking "Offline."  Information will still be stored within the LocalStorage until Service worker is reconnected to the network.  Underneath the Storage, click "IndexedDB," then "jate", and then "jate" to see the data saved within the object store of the browser's IndexedDB.  This database will be updated once the Service worker is reconnected to the network.  Back in the window, click the button "Install" to download the web application as an icon on the desktop and taskbar.  Click the application "JATE" from the desktop or taskbar to load the application with a registered Service worker and static assets pre cached upon loading along with subsequent pages and static assets.  

For usage instructions with the deployed application using Render, follow the previous instructions after the application is loaded.

**Attached is a screenshot of the application functionality:**

![App functionality](/public/images/PWA%20Just%20Another%20Text%20Editor%20Functionality.png)

**Attached is a screenshot of the application's manifest.json file:**

![manifest.json file](/public/images/PWA%20Just%20Another%20Text%20Editor%20manifest.json.png)

**Attached is a screenshot of the application's Registered Service worker:**

![Registered Service worker](/public/images/PWA%20Just%20Another%20Text%20Editor%20Registered%20Service%20worker.png)

**Attached is a screenshot of the application's IndexedDB storage:**

![IndexedDB storage](/public/images/PWA%20Just%20Another%20Text%20Editor%20IndexedDB%20Storage.png)

## Video

N/A

## Deployed Site

[PWA Just Another Text Editor](https://pwa-just-another-text-editor.onrender.com)

## Credits

[What is a Service Worker?](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)

[Progressive Web Apps: Going Offline](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#3)

[Service worker overview](https://developer.chrome.com/docs/workbox/service-worker-overview/)

[What is Webpack?](https://survivejs.com/webpack/what-is-webpack/)

[Why webpack?](https://webpack.js.org/concepts/why-webpack/)

[Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

Node.js, npm (node package manager), express.js 4.17.1, if-env 1.0.4, concurrently 5.2.0, nodemon 2.0.22, @babel/core 7.15.0, @babel/plugin-proposal-object-rest-spread 7.20.7,
@babel/plugin-transform-runtime 7.15.0, @babel/preset-env 7.15.0, @babel/runtime 7.15.3, babel-loader 8.2.2, css-loader 6.2.0, html-webpack-plugin 5.3.2, http-server 0.11.1, style-loader 3.2.1, webpack 5.51.1, webpack-cli 4.8.0, webpack-dev-server 4.0.0, webpack-pwa-manifest 4.3.0, workbox-cacheable-response 7.0.0, workbox-expiration 7.0.0, workbox-precaching 7.0.0,
workbox-recipes 7.0.0, workbox-routing 7.0.0, workbox-strategies 7.0.0, workbox-webpack-plugin 6.2.4, code-mirror-themes 1.0.0, idb 6.1.2

## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.