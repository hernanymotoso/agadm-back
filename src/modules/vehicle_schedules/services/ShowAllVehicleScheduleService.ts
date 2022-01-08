import { getRepository } from 'typeorm';
import VehicleSchedule from '../entities/VehicleSchedule';
import AppError from '../../../errors/AppError';

class ShowAllVehicleScheduleService {
  public async execute(): Promise<VehicleSchedule[]> {
    const vehicleSchedulesRepository = getRepository(VehicleSchedule);

    const vehicleSchedule = await vehicleSchedulesRepository.find({
      where: { vehicle_schedule_disabled: false },
    });

    if (!vehicleSchedule) {
      throw new AppError('Not have Vehicle schedule registered', 400);
    }

    return vehicleSchedule;
  }
}
export default ShowAllVehicleScheduleService;
