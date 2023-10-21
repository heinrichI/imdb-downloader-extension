import * as module from './scripts/jsencrypt.min.js';
import { tldLocales } from './locales.js';

import {DOMParser, parseHTML} from 'linkedom';
const document = (new DOMParser).parseFromString(html, 'text/html');

var DomParser = require('dom-parser');
var parser = new DomParser();



1- Created a js file named main.js:

var jsdom = require("jsdom");
exports.jsdom = jsdom;
2- browserified it with this command:

browserify main.js -o jsdom.bundle.js --standalone jsdomModule

3- And finally used it in the service worker like this:

const { JSDOM } = jsdomModule.jsdom;
const jd = new JSDOM('<div>hello</div>');



  // Send tip to content script via messaging
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`service_worker resive message ${message}`);
    // if (message.greeting === 'tip') {
    //   chrome.storage.local.get('tip').then(sendResponse);
    //   return true;
    // }

    message.imageRefs.forEach(href => {
      fetch(href)
      .then((response) => response.json())
      .then((data) => console.log(data));
      });

      return true;
    });
   

  // chrome.runtime.onMessage.addListener((message, sender) => {
  //   // The callback for runtime.onMessage must return falsy if we're not sending a response
  //   (async () => {
  //     console.log(message);
  //     if (message.type === 'open_side_panel') {
  //       // This will open a tab-specific side panel only on the current tab.
  //       await chrome.sidePanel.open({ tabId: sender.tab.id });
  //       await chrome.sidePanel.setOptions({
  //         tabId: sender.tab.id,
  //         path: 'sidepanel-tab.html',
  //         enabled: true
  //       });
  //     }
  //   })();
  // });
  