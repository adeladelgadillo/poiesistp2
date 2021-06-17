import express from 'express'
import createRouterTexts from '../../paginado/ruteo/routerTexts.js'


function createServer({port}) {
  const app = express();
  app.use("/textos", createRouterTexts());
 
  return new Promise((resolve, reject) => {
    const server = app.listen(port)
      .once("error", () => {
        reject(new Error("error al conectarse al servidor"));
        
      })
      .once("listening", () => {
        server.port = server.address().port;
        resolve(server);
        
    });
  });
}

export default createServer



