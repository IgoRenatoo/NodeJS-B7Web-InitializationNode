import {Router, Request, Response} from 'express';
import * as ContactController from '../controllers/contactController';
import * as HomeController from '../controllers/homeController';

const router = Router();
router.get('/', HomeController.home);

router.get('/contact', ContactController.mainContact);
router.post('/contact', ContactController.mainContact);

router.get('/about', (req:Request , res:Response) =>{
  res.render('pages/about')
});
export default router;