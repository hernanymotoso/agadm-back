import { getRepository } from 'typeorm';
import Vehicle from '../entities/Vehicle';
import AppError from '../../../errors/AppError';

interface IRequest {
  vehicle_brand: string;
  vehicle_model: string;
  vehicle_year: string;
  vehicle_code_patrimony: string;
  vehicle_description: string;
}

class CreateVehicleService {
  public async execute({
    vehicle_brand,
    vehicle_model,
    vehicle_year,
    vehicle_code_patrimony,
    vehicle_description,
  }: IRequest): Promise<Vehicle> {
    const vehiclesRepository = getRepository(Vehicle);

    // Find vehicle by vehicle_code_patrimony
    const checkVehicleExists = await vehiclesRepository.findOne({
      where: { vehicle_code_patrimony },
    });

    // Check if vehicle exists
    if (checkVehicleExists) {
      throw new AppError('Code patrimony already used', 405);
    }

    const vehicle = vehiclesRepository.create({
      vehicle_brand,
      vehicle_model,
      vehicle_year,
      vehicle_code_patrimony,
      vehicle_description,
    });

    await vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default CreateVehicleService;
