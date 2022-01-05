import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) =>
  response.json({ ok: 'UsersRouter' }),
);

export default usersRouter;
