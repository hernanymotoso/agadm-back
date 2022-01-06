import { Router } from 'express';

import usersRouter from '../../modules/users/routes/users.routes';
import profileRouter from '../../modules/users/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);

export default routes;
