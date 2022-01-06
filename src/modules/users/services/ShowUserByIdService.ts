import { getRepository } from 'typeorm';
import User from '../entities/User';
import AppError from '../../../errors/AppError';

interface IRequest {
  user_id: string;
}

class ShowUserByIdService {
  public async execute({ user_id }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('No registered user', 406);
    }

    return user;
  }
}

export default ShowUserByIdService;
