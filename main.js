var bittrex = require('node-bittrex-api');
var credentials = require('./credentials.json');
bittrex.options(credentials);

// bittrex.getmarketsummaries( function( data, err ) {

// 	// console.log(data);
//   if (err) {
//     return console.error(err);
//   }
//   for( var i in data.result ) {
//     bittrex.getticker( { market : 'BTC-1ST' }, function( ticker ) {
//       console.log( ticker );
//     });
//   }
// });

setInterval(ticker,5000);

function ticker() {
	bittrex.getticker( { market : 'BTC-1ST' }, function( ticker ) {
		console.log( ticker.result );
	})

	bittrex.getdepositaddress({ currency : 'BTC' }, function( data, err ) {
	  console.log( data );
	});

	bittrex.getdepositaddress({ currency : 'BTC' }, function( data, err ) {
	  console.log( data );
	});
}