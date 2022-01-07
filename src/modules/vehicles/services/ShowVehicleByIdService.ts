import { getRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import Vehicle from '../entities/Vehicle';

class ShowVehicleByIdService {
  public async execute(vehicle_id: string): Promise<Vehicle> {
    const vehiclesRepository = getRepository(Vehicle);

    const vehicle = await vehiclesRepository.findOne({
      where: { vehicle_id, vehicle_disabled: false },
    });

    if (!vehicle) {
      throw new AppError('Vehicle not found', 400);
    }

    return vehicle;
  }
}
export default ShowVehicleByIdService;
