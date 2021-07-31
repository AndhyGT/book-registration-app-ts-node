import { Router, Request, Response } from 'express';

const routes: Router = Router();

import { indexController } from '../controllers/indexController';

routes.get('/', indexController.index);

export default routes;