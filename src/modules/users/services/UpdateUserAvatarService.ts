import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import User from '../entities/User';
import uploadConfig from '../../../config/upload';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new Error('Only authenticated users can change avatar');
    }

    if (user.user_avatar) {
      // deletar avatar anterior

      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        user.user_avatar,
      );
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.user_avatar = avatarFilename;
    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
