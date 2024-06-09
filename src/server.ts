import express, { Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes  from './routes/index';


const server = express();
dotenv.config();

//  Configurar o diretório onde o servidor procurará os arquivos de views para renderizar.
server.set('views', path.join(__dirname, 'views'));
//  Configurar o Mustache como o motor de renderização de views.
server.set('view engine', 'mustache');
//  Configurar o Mustache como o motor de renderização para arquivos com extensão '.mustache'.
server.engine('mustache', mustache());

//  Importa biblioteca "path" do framework express, para definir diretório absoluto.
server.use(express.static(path.join(__dirname,'../public')));
//  Habilita middleware 'req.body'.
server.use(express.urlencoded({extended:true}));
//  Habilita middleware de segurança as requisições.
server.use(helmet());
//  Habilitar o caminho para acessar rotas configuradas.
server.use(mainRoutes);

//  Configura a porta do servidor local(localhost:)
server.listen(process.env.PORT, () => {
  console.log("Servidor escutando!")
});
//  Configuração da page '404'.
server.use((req: Request, res: Response) => {
  res.status(404).render('pages/error');
});
