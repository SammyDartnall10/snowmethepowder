const resorts = [
  'https://kickinghorseresort.com/conditions/snow-report/',
  'https://www.skilouise.com/snow-conditions/',
  'https://www.skibanff.com/conditions',
  'https://skifernie.com/conditions/snow-report/',
  'https://www.skimarmot.com/mountain/weather-conditions/',
  'https://www.revelstokemountainresort.com/conditions/snow-report/',
  'https://skiwhitewater.com/conditions/',
  'https://www.whistlerblackcomb.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
  'https://www.redresort.com/report/',
];

for (i = 0; i < resorts.length; i++) {
  const holder = document.getElementById('holder');

  var inner = document.createElement('div');
  inner.setAttribute('class', 'inner');

  var x = document.createElement('EMBED');
  x.setAttribute('src', resorts[i]);
  x.setAttribute('class', 'embed');

  inner.appendChild(x);
  holder.appendChild(inner);
}
