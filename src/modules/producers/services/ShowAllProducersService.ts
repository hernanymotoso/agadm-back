import { getRepository } from 'typeorm';
import Producer from '../entities/Producer';
import AppError from '../../../errors/AppError';

class ShowAllProducersService {
  public async execute(): Promise<Producer[]> {
    const producersRepository = getRepository(Producer);

    const producers = await producersRepository.find({
      where: { producer_disabled: false },
    });

    if (!producers) {
      throw new AppError('No exists producers registered', 406);
    }

    return producers;
  }
}

export default ShowAllProducersService;
