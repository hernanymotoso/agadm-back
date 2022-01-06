import { Router } from 'express';
import multer from 'multer';
import CreateUserService from '../services/CreateUserService';
import ShowAllUsersService from '../services/ShowAllUsersService';
import ShowUserByIdService from '../services/ShowUserByIdService';
import ShowAllUsersByTypeService from '../services/ShowAllUsersByTypeService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import uploadConfig from '../../../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

// Get all users
usersRouter.get('/', async (request, response) => {
  try {
    const showAllUsersService = new ShowAllUsersService();

    const users = await showAllUsersService.execute();

    return response.status(200).json(users);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Create user
usersRouter.post('/', async (request, response) => {
  try {
    const {
      user_name,
      user_last_name,
      user_email,
      user_password,
      user_phone,
      user_ID,
      user_CPF,
      user_address,
      user_district,
      user_city,
      user_state,
    } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      user_name,
      user_last_name,
      user_email,
      user_password,
      user_phone,
      user_ID,
      user_CPF,
      user_address,
      user_district,
      user_city,
      user_state,
    });

    delete user.user_password;

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Get user by  id
usersRouter.get('/:user_id', async (request, response) => {
  try {
    const { user_id } = request.params;

    const showUserByIdService = new ShowUserByIdService();

    const user = await showUserByIdService.execute({ user_id });

    delete user.user_password;

    return response.status(400).json(user);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Get all users by type
usersRouter.get('/get/:user_type', async (request, response) => {
  try {
    const { user_type } = request.params;
    const showAllUsersByTypeService = new ShowAllUsersByTypeService();

    const users = await showAllUsersByTypeService.execute({ user_type });

    return response.status(200).json(users);
  } catch (err) {
    return response.status(400).json(err);
  }
});

usersRouter.use(ensureAuthenticated);
usersRouter.patch(
  '/avatar',
  upload.single('user_avatar'),
  async (request, response) => {
    try {
      const updateUserAvatarService = new UpdateUserAvatarService();

      const user = await updateUserAvatarService.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      delete user.user_password;

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
);

export default usersRouter;
