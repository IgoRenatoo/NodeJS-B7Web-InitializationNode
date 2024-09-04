import { Router } from 'express';
import * as ContactController from '../controllers/contactController';
import * as HomeController from '../controllers/homeController';
import * as AboutController from '../controllers/aboutController';

const router = Router();

router.get('/', HomeController.mainHome);

router.get('/contact', ContactController.mainContact);
router.post('/contact', ContactController.mainContact);

router.get('/about', AboutController.mainAbout);

export default router;