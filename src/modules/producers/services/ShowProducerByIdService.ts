import { getRepository } from 'typeorm';
import Producer from '../entities/Producer';
import AppError from '../../../errors/AppError';

interface IRequest {
  producer_id: string;
}

class ShowProducerByIdService {
  public async execute({ producer_id }: IRequest): Promise<Producer> {
    const producersRepository = getRepository(Producer);

    const producer = await producersRepository.findOne({
      where: { producer_id, producer_disabled: false },
    });

    if (!producer) {
      throw new AppError('No registered producer', 406);
    }

    return producer;
  }
}

export default ShowProducerByIdService;
