const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
// var CronJob = require('cron').CronJob;

// new CronJob('0 * * * * *', function () {



request('https://www.avalanche.ca/weather/stations/17', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const resortData = [
      ($('#app').text())
      // country: ($(el).find('i').attr('class').replace('flag flag-', '')).toUpperCase(),
      // snowdepth: ($(el).find('span.picks_val.snow0to3mid').text())
    ];
    console.log(resortData)
    const resortDataTrimmed = resortData.filter(n => n != undefined)
    fs.writeFile('resortData.json',
      JSON.stringify(resortDataTrimmed, null, 4),
      (err) => console.log('File successfully written!'))
  }

})
// }, null, true, 'America/Los_Angeles');