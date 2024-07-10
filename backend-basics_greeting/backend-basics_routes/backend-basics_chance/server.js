import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    const name = chance.name();
    const age = chance.age();
    const profession = chance.profession();
    const responseMessage = `Hallo, mein Name ist ${name} und ich bin ${age} Jahre alt. Ich bin ein(e) ${profession}.`;
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(responseMessage);
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
