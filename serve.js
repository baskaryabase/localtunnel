const serve = require('serve');

const server = serve("./storage/external-1/", 
{
  port: 1337,
  ignore: ['node_modules']
});

console.log("1337")
