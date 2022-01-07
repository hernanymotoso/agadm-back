import { getRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import Vehicle from '../entities/Vehicle';

class ShowAllVehiclesService {
  public async execute(): Promise<Vehicle[]> {
    const vehiclesRepository = getRepository(Vehicle);

    const vehicles = await vehiclesRepository.find({
      where: { vehicle_disabled: false },
    });

    if (!vehicles) {
      throw new AppError('Not have vehicles registered', 400);
    }

    return vehicles;
  }
}
export default ShowAllVehiclesService;
