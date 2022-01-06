import { getRepository } from 'typeorm';
import User from '../entities/User';
import AppError from '../../../errors/AppError';

interface IRequest {
  user_type: string;
}

class ShowAllUsersByTypeService {
  public async execute({ user_type }: IRequest): Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find({ where: { user_type } });

    if (!users) {
      throw new AppError('No exists users registered', 406);
    }

    return users;
  }
}

export default ShowAllUsersByTypeService;
