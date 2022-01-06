import { getRepository } from 'typeorm';
import User from '../entities/User';
import AppError from '../../../errors/AppError';

class ShowAllUsersService {
  public async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    if (!users) {
      throw new AppError('No exists users registered', 406);
    }

    return users;
  }
}

export default ShowAllUsersService;
