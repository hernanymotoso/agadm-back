import { getRepository } from 'typeorm';
import VehicleSchedule from '../entities/VehicleSchedule';
// import AppError from '../../../errors/AppError';

interface IRequest {
  vehicle_schedule_producer_id: string;
  vehicle_schedule_vehicle_id: string;
  vehicle_schedule_amount_time: number;
  vehicle_schedule_payment: string;
  vehicle_schedule_status: string;
  vehicle_schedule_service_location: string;
  vehicle_schedule_operation_type: string;
  vehicle_schedule_worked_hours: number;

  vehicle_schedule_start_hourmeter: number;
  vehicle_schedule_end_hourmeter: number;
  vehicle_schedule_date: Date;
}

class CreateVehicleScheduleService {
  public async execute({
    vehicle_schedule_producer_id,
    vehicle_schedule_vehicle_id,
    vehicle_schedule_amount_time,
    vehicle_schedule_payment,
    vehicle_schedule_status,
    vehicle_schedule_service_location,
    vehicle_schedule_operation_type,
    vehicle_schedule_worked_hours,
    vehicle_schedule_start_hourmeter,
    vehicle_schedule_end_hourmeter,
    vehicle_schedule_date,
  }: IRequest): Promise<VehicleSchedule> {
    const vehicleSchedulesRepository = getRepository(VehicleSchedule);
    // VERIFICAR DEPOIS AGENDAMENTOS NA MESMA HORA

    const vehicleSchedule = vehicleSchedulesRepository.create({
      vehicle_schedule_producer_id,
      vehicle_schedule_vehicle_id,
      vehicle_schedule_amount_time,
      vehicle_schedule_payment,
      vehicle_schedule_status,
      vehicle_schedule_service_location,
      vehicle_schedule_operation_type,
      vehicle_schedule_worked_hours,
      vehicle_schedule_hours_left:
        vehicle_schedule_amount_time - vehicle_schedule_worked_hours,
      vehicle_schedule_start_hourmeter,
      vehicle_schedule_end_hourmeter,
      vehicle_schedule_date,
    });

    await vehicleSchedulesRepository.save(vehicleSchedule);

    return vehicleSchedule;
  }
}
export default CreateVehicleScheduleService;
