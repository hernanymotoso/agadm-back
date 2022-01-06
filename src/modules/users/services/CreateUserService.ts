import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../entities/User';
import AppError from '../../../errors/AppError';

interface IRequest {
  user_name: string;
  user_last_name: string;
  user_email: string;
  user_password: string;
  user_type?: string;
  user_phone: string;
  user_ID: string;
  user_CPF: string;
  user_address: string;
  user_district: string;
  user_city: string;
  user_state: string;
}

class CreateUserService {
  public async execute({
    user_name,
    user_last_name,
    user_email,
    user_password,
    user_type = 'Admin',
    user_phone,
    user_ID,
    user_CPF,
    user_address,
    user_district,
    user_city,
    user_state,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    // find user by email
    const checkUserExists = await usersRepository.findOne({
      where: { user_email },
    });

    // Check if user exists
    if (checkUserExists) {
      throw new AppError('Email address already used', 405);
    }

    // created the password hashed
    const hashedPassword = await hash(user_password, 8);

    // created the user
    const user = usersRepository.create({
      user_name,
      user_last_name,
      user_email,
      user_password: hashedPassword,
      user_type,
      user_phone,
      user_ID,
      user_CPF,
      user_address,
      user_district,
      user_city,
      user_state,
    });

    // saved the user
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
