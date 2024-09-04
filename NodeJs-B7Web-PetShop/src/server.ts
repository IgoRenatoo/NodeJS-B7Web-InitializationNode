import helmet from 'helmet';
import express, { Router, Request, Response, urlencoded } from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import MainRouters from './routes/routes';
import { notFoundRequest, errorHandler } from './routes/errorHandler';

const server = express();
dotenv.config();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'mustache');
server.engine('mustache', mustache());

// Middleware de segurança
server.use(helmet());
// Servir arquivos estáticos
server.use(express.static(path.join(__dirname, '../public')));
// Analisar corpos URL-encoded
server.use(urlencoded({ extended: true }));
// Usar roteadores definidos em MainRouters
server.use(MainRouters);
server.use(notFoundRequest);
server.use(errorHandler);

server.get('/ping', (req: Request, res: Response) => { 
  res.json({pong: true})
})

// Iniciar o servidor
server.listen(process.env.PORT, () => {
  console.log('Servidor está rodando no link => http:localhost:3000')
});
