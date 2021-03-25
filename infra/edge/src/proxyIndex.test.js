const proxyIndex = require('./proxyIndex');


proxyIndex.handler({
    Records: [
        {
            cf: {
                request: {
                    uri: '/1.0.0/hello-haha'
                }
            }
        }
    ]
}, {},  (_, request) => {
    console.log(request);
})