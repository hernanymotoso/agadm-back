import { Router } from 'express';

import CreateVehicleScheduleService from '../services/CreateVehicleScheduleService';
import ShowAllVehicleScheduleService from '../services/ShowAllVehicleScheduleService';
import UpdateVehicleScheduleService from '../services/UpdateVehicleScheduleService';
import DeleteVehicleScheduleService from '../services/DeleteVehicleScheduleService';
import ShowVehicleScheduleByIdService from '../services/ShowVehicleScheduleByIdService';

import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

const vehicleSchedulesRouter = Router();

vehicleSchedulesRouter.use(ensureAuthenticated);

// Get all vehicle schedule
vehicleSchedulesRouter.get('/', async (request, response) => {
  try {
    const showAllVehicleScheduleService = new ShowAllVehicleScheduleService();

    const vehicleSchedules = await showAllVehicleScheduleService.execute();

    return response.status(200).json(vehicleSchedules);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Create vehicle schedule
vehicleSchedulesRouter.post('/', async (request, response) => {
  try {
    const {
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
    } = request.body;

    const createVehicleScheduleService = new CreateVehicleScheduleService();

    const vehicleSchedule = await createVehicleScheduleService.execute({
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
    });

    return response.status(200).json(vehicleSchedule);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Edit vehicle schedule
vehicleSchedulesRouter.put('/', async (request, response) => {
  try {
    const {
      vehicle_schedule_id,
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
    } = request.body;

    const updateVehicleScheduleService = new UpdateVehicleScheduleService();

    const vehicleSchedule = await updateVehicleScheduleService.execute({
      vehicle_schedule_id,
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
    });

    return response.status(200).json(vehicleSchedule);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Delete vehicle schedule
vehicleSchedulesRouter.delete(
  '/:vehicle_schedule_id',
  async (request, response) => {
    try {
      const { vehicle_schedule_id } = request.params;
      const deleteVehicleScheduleService = new DeleteVehicleScheduleService();

      const vehicleScheduleDeleted = await deleteVehicleScheduleService.execute(
        vehicle_schedule_id,
      );

      return response.status(200).json(vehicleScheduleDeleted);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
);

// Get vehicle schedule by id
vehicleSchedulesRouter.get(
  '/:vehicle_schedule_id',
  async (request, response) => {
    try {
      const { vehicle_schedule_id } = request.params;
      const showVehicleScheduleByIdService =
        new ShowVehicleScheduleByIdService();

      const vehicleSchedule = await showVehicleScheduleByIdService.execute(
        vehicle_schedule_id,
      );

      return response.status(200).json(vehicleSchedule);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
);

export default vehicleSchedulesRouter;
