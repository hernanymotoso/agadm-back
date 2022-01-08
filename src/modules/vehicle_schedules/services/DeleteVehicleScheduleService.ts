import { getRepository } from 'typeorm';
import VehicleSchedule from '../entities/VehicleSchedule';
import AppError from '../../../errors/AppError';

class DeleteVehicleScheduleService {
  public async execute(vehicle_schedule_id: string) {
    const vehicleSchedulesRepository = getRepository(VehicleSchedule);

    const vehicleSchedule = await vehicleSchedulesRepository.findOne({
      where: { vehicle_schedule_id, vehicle_schedule_disabled: false },
    });

    if (!vehicleSchedule) {
      throw new AppError('Vehicle schedule not found', 400);
    }

    vehicleSchedule.vehicle_schedule_disabled = true;
    await vehicleSchedulesRepository.save(vehicleSchedule);

    return { message: 'Vehicle schedule deleted ' };
  }
}
export default DeleteVehicleScheduleService;
