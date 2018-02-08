'use strict';

/*global chrome:false */

browser.browserAction.setBadgeText({text: '(ツ)'});
//browser.browserAction.setBadgeBackgroundColor({color: '#eae'});

browser.browserAction.onClicked.addListener(function(myTab) {
  browser.tabs.create({'url': 'https://9gag.com/gag/a6oL8vL?ref=9g.m', 'active': true});
});


//FOR RANDOM PAGES
/*
var hArray = new Array() [
  "http://wisdomquotes.com/gratitude-quotes/",
  "http://www.movemequotes.com/top-50-be-thankful-quotes/",
  "https://www.inc.com/jeff-haden/40-inspiring-motivational-quotes-about-gratitude.html"
],

var sArray = [
  "https://9gag.com/gag/aW16ePq",
  "https://9gag.com/gag/aDxoqvO",
  "https://9gag.com/gag/a6oL8vL?ref=9g.m"
],

var chosenMood = i.target.textContent;
browser.tabs.create({
  url: chosenMood
});
}


if (chosenMood = Happy) {
  var hArray = Math.floor(Math.random() * hArray.length);
} else if {
      var sArray = Math.floor(Math.random() * sArray.length);
} else {
  console.log(e.toString());
}
*/
