'use strict';

/*global chrome:false */

browser.browserAction.setBadgeText({text: '(ツ)'});
//browser.browserAction.setBadgeBackgroundColor({color: '#eae'});

browser.browserAction.onClicked.addListener(function(myTab) {
  browser.tabs.create({'url': 'https://9gag.com/gag/a6oL8vL?ref=9g.m', 'active': true});
  //browser.tabs.create({chosenMood, 'active': true});
});
