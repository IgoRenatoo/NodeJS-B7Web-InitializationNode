import {Router, Request, Response} from 'express';
import * as PageControllers from '../controllers/pageControllers';


const router = Router();

router.get('/', PageControllers.home);
router.get('/dog', PageControllers.dog);
router.get('/cat', PageControllers.cat);
router.get('/fish', PageControllers.fish);

export default router;