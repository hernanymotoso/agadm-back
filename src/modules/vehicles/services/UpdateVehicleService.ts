import { getRepository } from 'typeorm';
import Vehicle from '../entities/Vehicle';
import AppError from '../../../errors/AppError';

interface IRequest {
  vehicle_id: string;
  vehicle_brand: string;
  vehicle_model: string;
  vehicle_year: string;
  vehicle_code_patrimony: string;
  vehicle_description: string;
}

class UpdateVehicleService {
  public async execute({
    vehicle_id,
    vehicle_brand,
    vehicle_model,
    vehicle_year,
    vehicle_code_patrimony,
    vehicle_description,
  }: IRequest): Promise<Vehicle> {
    const vehiclesRepository = getRepository(Vehicle);

    // Find vehicle by vehicle_code_patrimony
    const vehicle = await vehiclesRepository.findOne(vehicle_id);

    // Check if vehicle exists
    if (!vehicle) {
      throw new AppError('Vehicle not found', 405);
    }

    vehicle.vehicle_brand = vehicle_brand;
    vehicle.vehicle_model = vehicle_model;
    vehicle.vehicle_year = vehicle_year;
    vehicle.vehicle_code_patrimony = vehicle_code_patrimony;
    vehicle.vehicle_description = vehicle_description;

    await vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default UpdateVehicleService;
