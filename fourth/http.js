const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("welcome to new era");
        res.end();
    } else if (req.url === '/tata') {
        res.write("welcome to tata");
        res.end();
    }else{
        res.end(`
            <h1>ooo baby!!!</h1>
            <p>you came to wrong page</p>
            <a href="/" style="text-decoration: none;">Go here</a>
        `);
        }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
