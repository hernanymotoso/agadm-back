import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import AuthConfig from '../../../config/auth';
import AppError from '../../../errors/AppError';
import User from '../entities/User';

interface IRequest {
  user_email: string;
  user_password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthUserService {
  public async execute({
    user_email,
    user_password,
  }: IRequest): Promise<IResponse> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ user_email });

    if (!user) {
      throw new AppError('Incorrect email/password conbination', 401);
    }

    const passwordMatched = await compare(user_password, user.user_password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password conbination', 401);
    }

    const token = sign({}, AuthConfig.jwt.secret, {
      subject: user.user_id,
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default AuthUserService;
