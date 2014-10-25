tweetMapp
=========

tweetMapp was built by [Elliot](http://github.com/ElliotLewis8923), [Javier](http://github.com/silver-io), [Spike](http://github.com/spike01), and I for our final project at Makers Academy.

Around the world, around 8000 tweets are sent per second. But what do people tweet about? Our project visualises the moods of world regions based on tweets. We process roughly 3000 tweets a minute live from Twitter's public stream. Each word is analysed for emotional content using the [AFINN database](http://neuro.imm.dtu.dk/wiki/AFINN) and given a score, e.g. +3 for 'happy' and -2 for 'sad'. The average score of a tweet determines its colour. Finally, the tweet is plotted on a HTML Canvas using the coordinates it was sent from.

Visit http://tweetmapp.herokuapp.com/ to view our app in action. We've hidden an Easter egg in the app, see if you can find it!

Technologies used:
- Node.js
- socket.io
- [Twitter Streaming API](https://dev.twitter.com/streaming/public)
- Mocha
- Jasmine
- HTML5
- CSS3
- JavaScript
- D3.js

How to run tests
----------------
Clone the repository:
```shell
$ git clone git@github.com:ch2ch3/tweetmapp.git
```

Change into the directory:
```shell
$ cd tweetmapp
```

Install dependencies:
```shell
$ npm install
```

Run all tests:
```shell
$ npm test
```

Credits
-------
[Material Design Icons](https://github.com/google/material-design-icons/releases/tag/1.0.0) by [Google Design](http://www.google.com/design/), used under [CC BY-SA](http://creativecommons.org/licenses/by-sa/4.0/). Colours changed to white and blue.

Contains information from [AFINN](http://neuro.imm.dtu.dk/wiki/AFINN), which is made available here under the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/) (ODbL). Translated into Bahasa Indonesia, Danish, French, German, Portuguese, Russian, Spanish, and Turkish with [Google Translate](http://translate.google.com/).