const http = require('http');
const server = http.createServer(); //create HTTP Server 
const PORT = 3300;

function requestListener(request, response) {
    response.setHeader('Content-Type', 'application/json');
    if (request.method !== 'GET') {
        response.statusCode = 405;
        response.end(JSON.stringify({
            status: 'fail',
            message: 'method not allowed',
            data: {}
        }));
        return;
    }

    if (request.url === '/' ) {
        response.statusCode = 200;
        response.end(JSON.stringify({
            status: 'success',
            message: 'halaman homepage',
            data: {}
        }));
        return;
    }
    if (request.url === '/articles') {
        response.statusCode = 200;
        response.end(JSON.stringify({
            status: 'success',
            message: 'halaman articles',
                data: {
                    articles: [
                        'article 1', 
                        'article 2',
                        'article 3'
                    ],
                }
        }));
            return;
        }
        response.statusCode = 404;
        response.end(JSON.stringify({
            status: 'fail',
            message: 'page not found',
            data: {},
        }));
        return;
}

//running server
server.on('request', requestListener);
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


