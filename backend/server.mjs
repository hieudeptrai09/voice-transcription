import * as http from "http";
import { transcriber } from "./transcriber.mjs";

const headers = {
  "Content-Type": "text/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET",
  "Access-Control-Allow-Headers":
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
};

http
  .createServer(async function (req, res) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", async () => {
      let result = await transcriber(JSON.parse(data));
      // console.log(JSON.parse(data));
      res.writeHead(200, headers);
      res.write(JSON.stringify(result));
      return res.end();
    });
  })
  .listen(8080);
