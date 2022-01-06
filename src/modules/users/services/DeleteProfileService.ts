import { getRepository } from 'typeorm';
import User from '../entities/User';
import AppError from '../../../errors/AppError';

class DeleteProfileService {
  public async execute(user_id: string) {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await usersRepository.remove(user);

    return { message: 'Deleted user' };
  }
}

export default DeleteProfileService;
