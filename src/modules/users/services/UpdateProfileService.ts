import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import User from '../entities/User';
import AppError from '../../../errors/AppError';

interface IRequest {
  user_id: string;
  user_name: string;
  user_last_name: string;
  user_email: string;
  user_old_password?: string;
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

class UpdateProfileService {
  public async execute({
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
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    user.user_name = user_name;
    user.user_last_name = user_last_name;
    user.user_email = user_email;
    user.user_phone = user_phone;
    user.user_ID = user_ID;
    user.user_CPF = user_CPF;
    user.user_address = user_address;
    user.user_district = user_district;
    user.user_city = user_city;
    user.user_state = user_state;

    if (user_password && user_old_password) {
      const checkOldPassword = await compare(
        user_old_password,
        user.user_password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match', 401);
      }

      user.user_password = await hash(user_password, 8);
    }

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateProfileService;
