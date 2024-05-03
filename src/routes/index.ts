import {Router, Request, Response, query} from 'express';

const router = Router();

router.get('/', (req:Request , res:Response) =>{
  let name: string = req.query.name as string;
  res.render('pages/home',{
    name
  });
});
router.get('/contato', (req:Request , res:Response) =>{
  let name: string = 'Igor';
  let x: boolean = true;
  let object  = { 
    firstName: 'Igor',
    lastName: 'Renato',
    lastDoLastName: 'Cordeiro'
  };  
  res.render('pages/contact', {
    name, object, x
  })
});
router.get('/lista', (req:Request , res:Response) =>{
  res.send('Acessou página lista!')
});
export default router;
