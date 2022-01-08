import { getRepository } from 'typeorm';
import VehicleSchedule from '../entities/VehicleSchedule';
import AppError from '../../../errors/AppError';

class ShowVehicleScheduleByIdService {
  public async execute(vehicle_schedule_id: string): Promise<VehicleSchedule> {
    const vehicleSchedulesRepository = getRepository(VehicleSchedule);

    const vehicleSchedule = await vehicleSchedulesRepository.findOne({
      where: { vehicle_schedule_id, vehicle_schedule_disabled: false },
    });

    if (!vehicleSchedule) {
      throw new AppError('Not have Vehicle schedule registered', 400);
    }

    return vehicleSchedule;
  }
}
export default ShowVehicleScheduleByIdService;
