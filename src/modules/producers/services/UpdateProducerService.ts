import { getRepository } from 'typeorm';

import Producer from '../entities/Producer';
import AppError from '../../../errors/AppError';

interface IRequest {
  producer_id: string;
  producer_name: string;
  producer_last_name: string;
  producer_email: string;
  producer_phone: string;
  producer_ID: string;
  producer_CPF: string;
  producer_address: string;
  producer_district: string;
  producer_city: string;
  producer_state: string;
}

class UpdateProducerService {
  public async execute({
    producer_id,
    producer_name,
    producer_last_name,
    producer_email,
    producer_phone,
    producer_ID,
    producer_CPF,
    producer_address,
    producer_district,
    producer_city,
    producer_state,
  }: IRequest): Promise<Producer> {
    const producersRepository = getRepository(Producer);

    const producer = await producersRepository.findOne(producer_id);
    if (!producer) {
      throw new AppError('Producer not found', 404);
    }

    producer.producer_name = producer_name;
    producer.producer_last_name = producer_last_name;
    producer.producer_email = producer_email;
    producer.producer_phone = producer_phone;
    producer.producer_ID = producer_ID;
    producer.producer_CPF = producer_CPF;
    producer.producer_address = producer_address;
    producer.producer_district = producer_district;
    producer.producer_city = producer_city;
    producer.producer_state = producer_state;

    await producersRepository.save(producer);

    return producer;
  }
}

export default UpdateProducerService;
