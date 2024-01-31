import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';
import { publicRouter } from './routers/ticket.mjs';

const app = express();
const PORT = process.env.PORT ?? 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());

app.use(cors())

app.use('/sede', publicRouter);

app.use(express.static(__dirname + "/public"))

app.get('/', (req,res)=>{res.sendFile(__dirname + '/views/index.html')})
app.post('/', (req,res)=>{res.redirect('/')});

app.listen(PORT, ()=>{
  console.log(`servidor escuchando a traves del http://192.168.203.1:${PORT}`);
})

