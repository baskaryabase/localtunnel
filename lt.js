localtunnel =
require('./Getfyt-Backend/node_modules/localtunnel'); 
var tunnel = localtunnel(3000,
function(err, tunnel) {
tunnel.url;
console.log(tunnel.url);
});
tunnel.on('close', function() {
    // tunnels are closed
});

