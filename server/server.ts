import express, { Application, Request, Response } from 'express';
import * as fs from 'fs';

let Canvas = require('canvas');

const cors = require('cors');
const app: Application = express();
const port = 5050;

// Body parsing Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use cors

const loadedMap = fs.readFile('./assets/Images/map.png', (err, data) => {
  const map = new Canvas.Image();
  map.src = data;
  return map;
});

console.log(loadedMap);

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: loadedMap
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
