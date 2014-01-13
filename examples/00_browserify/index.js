var sillystring = require('./lib/sillystring')
, formulae = require('./lib/formulae')
, superagent = require('superagent')
;

console.log(sillystring('Browserify is fun!'));

console.log(formulae.makeBig(5, 10));

superagent.get('https://www.google.com/').end(function(response) {
	// this is asynchronous
	console.log('status: %s', response.status);
	console.dir(response.headers);
});