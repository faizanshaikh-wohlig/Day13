const stream = require('stream');
console.log(stream.Readable.Duplex);

// 4 types of streams
// readable
// writable
// duplex
// transform

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on('request', (req, res) => {
    var fs = require("fs");
    fs.readFile("input.txt", (err, data)=> {
        if (err) return console.log(err); 
        res.end(data.toString());
    });

    const rstream = fs.createReadStream("input.txt");
    rstream.on('data',(chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on ('end', () => {
        res.end();
    });
    rstream.on('error', () => {
        console.log(err);
        res.end("file not found");
    });
});
server.listen(8000);