import { getRepository } from 'typeorm';

import Producer from '../entities/Producer';
import AppError from '../../../errors/AppError';

interface IRequest {
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

class CreateProducerService {
  public async execute({
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

    // find producer by email
    const checkProducerExists = await producersRepository.findOne({
      where: { producer_email },
    });

    // Check if producer exists
    if (checkProducerExists) {
      throw new AppError('Email address already used', 405);
    }

    // created the producer
    const producer = producersRepository.create({
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
    });

    // saved the producer
    await producersRepository.save(producer);

    return producer;
  }
}

export default CreateProducerService;
