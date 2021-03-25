const path = require('path');

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    var uri = request.uri;
    const parsed_path = path.parse(uri);
  
    // Extract version part
    const version = uri.match(/^\/[0-9]+\.[0-9]+\.[0-9]+/g);
    
    if (version){
        if (parsed_path.pathname === '/') {
          uri = version + '/index.html';
        } else if (parsed_path.ext === '') {
          uri = uri + '.html';
        }
    }

    request.uri = uri
   
    callback(null, request);
  }