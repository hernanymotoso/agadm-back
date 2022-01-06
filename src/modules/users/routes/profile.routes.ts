import { Router } from 'express';

import UpdateProfileService from '../services/UpdateProfileService';
import DeleteProfileService from '../services/DeleteProfileService';

const profileRouter = Router();

profileRouter.put('/', async (request, response) => {
  try {
    const {
      user_id,
      user_name,
      user_last_name,
      user_email,
      user_old_password,
      user_password,
      user_phone,
      user_ID,
      user_CPF,
      user_address,
      user_district,
      user_city,
      user_state,
    } = request.body;

    const updateProfileService = new UpdateProfileService();

    const user = await updateProfileService.execute({
      user_id,
      user_name,
      user_last_name,
      user_email,
      user_old_password,
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

profileRouter.delete('/:user_id', async (request, response) => {
  try {
    const { user_id } = request.params;

    const deleteProfileService = new DeleteProfileService();

    const userDeleted = await deleteProfileService.execute(user_id);

    return response.status(200).json(userDeleted);
  } catch (err) {
    return response.status(400).json(err);
  }
});

export default profileRouter;
