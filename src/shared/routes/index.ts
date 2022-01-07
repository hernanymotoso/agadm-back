import { Router } from 'express';

import usersRouter from '../../modules/users/routes/users.routes';
import profileRouter from '../../modules/users/routes/profile.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';
import producersRouter from '../../modules/producers/routes/producers.routes';
import vehiclesRouter from '../../modules/vehicles/routes/vehicles.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/producers', producersRouter);
routes.use('/vehicles', vehiclesRouter);

export default routes;
