import http from "node:http";
// const http = require("node:http");
import fs from "node:fs/promises"

const PORT = 8000
// const data = await fs.readFile('./package.json', 'utf-8');
// console.log(data)
try {
    fs.access()
    fs.writeFile()
} catch (error) {

}



http
    .createServer( async (req, res)=>{
        if (req.method === "GET" && req.url === '/comedians'){
            try{
                const data = await fs.readFile('./comedians.json', 'utf-8')
                res.writeHead(200, {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Access-Control-Allow-Origin": "*",
                });
                res.end(data);
            } catch (error) {
                res.writeHead(500, {
                    "Content-Type": "text/plain; charset=utf-8",
                });
                res.end(`Ошибка сервера: ${error}`);
            }

            
        } else {
            res.writeHead(404);
            res.end('not found');
        }
        })
    .listen(PORT);

    console.log(`server on port ${PORT} http://127.0.0.1:${PORT}`);