import { getRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import Vehicle from '../entities/Vehicle';

class DeleteVehicleService {
  public async execute(vehicle_id: string) {
    const vehiclesRepository = getRepository(Vehicle);

    const vehicle = await vehiclesRepository.findOne({
      where: { vehicle_id, vehicle_disabled: false },
    });

    if (!vehicle) {
      throw new AppError('Vehicle not found', 400);
    }

    vehicle.vehicle_disabled = true;
    await vehiclesRepository.save(vehicle);

    return { message: 'Vehicle deleted' };
  }
}
export default DeleteVehicleService;
