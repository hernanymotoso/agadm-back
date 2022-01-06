import { getRepository } from 'typeorm';
import Producer from '../entities/Producer';
import AppError from '../../../errors/AppError';

class DeleteProducerService {
  public async execute(producer_id: string) {
    const producersRepository = getRepository(Producer);

    const producer = await producersRepository.findOne(producer_id);

    if (!producer) {
      throw new AppError('Producer not found', 404);
    }

    producer.producer_disabled = true;
    await producersRepository.save(producer);

    return { message: 'Deleted producer' };
  }
}

export default DeleteProducerService;
