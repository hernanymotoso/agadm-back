import { Router } from 'express';

import usersRouter from '../../modules/users/routes/users.routes';
import profileRouter from '../../modules/users/routes/profile.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
