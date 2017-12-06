var bittrex = require('node-bittrex-api');
var credentials = require('./credentials.json');
bittrex.options(credentials);

setInterval( run, 5000);

function run() {
	bittrex.getticker( { market : 'BTC-1ST' }, function( ticker ) {
		console.log( ticker.result );
	})

	bittrex.getdepositaddress({ currency : 'BTC' }, function( data, err ) {
	  console.log( data );
	});

	bittrex.getdepositaddress({ currency : 'BTC' }, function( data, err ) {
	  console.log( data );
	});


	bittrex.withdraw({ currency : 'BTC', quantity : '0.1', address : '1YaduPgCCC1aXxVegu3GVEZgaAR4QdDG2' }, function( data, err ) {
	  console.log( data );
	});
}