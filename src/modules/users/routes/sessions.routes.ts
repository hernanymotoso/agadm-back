import { Router } from 'express';

import AuthUserService from '../services/AuthUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { user_email, user_password } = request.body;

  const authUserService = new AuthUserService();

  const { user, token } = await authUserService.execute({
    user_email,
    user_password,
  });

  return response.json({ user, token });
});

export default sessionsRouter;
