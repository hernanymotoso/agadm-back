import { Router } from 'express';
import AppError from '../../../errors/AppError';
import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

import CreateVehicleService from '../services/CreateVehicleService';
import ShowAllVehiclesService from '../services/ShowAllVehiclesService';
import UpdateVehicleService from '../services/UpdateVehicleService';
import ShowVehicleByIdService from '../services/ShowVehicleByIdService';
import DeleteVehicleService from '../services/DeleteVehicleService';

const vehiclesRouter = Router();
vehiclesRouter.use(ensureAuthenticated);

// Get all vehicles
vehiclesRouter.get('/', async (request, response) => {
  try {
    const showAllVehiclesService = new ShowAllVehiclesService();

    const vehicles = await showAllVehiclesService.execute();

    if (!vehicles) {
      throw new AppError('Not vehicles registered');
    }

    return response.status(200).json(vehicles);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Create vehicle
vehiclesRouter.post('/', async (request, response) => {
  try {
    const {
      vehicle_brand,
      vehicle_model,
      vehicle_year,
      vehicle_code_patrimony,
      vehicle_description,
    } = request.body;

    const createVehicleService = new CreateVehicleService();

    const vehicle = await createVehicleService.execute({
      vehicle_brand,
      vehicle_model,
      vehicle_year,
      vehicle_code_patrimony,
      vehicle_description,
    });

    return response.status(200).json(vehicle);
  } catch (err) {
    console.log(err);
    return response.status(400).json(err);
  }
});

// Edit vehicle
vehiclesRouter.put('/', async (request, response) => {
  try {
    const {
      vehicle_id,
      vehicle_brand,
      vehicle_model,
      vehicle_year,
      vehicle_code_patrimony,
      vehicle_description,
    } = request.body;

    const updateVehicleService = new UpdateVehicleService();

    const vehicle = await updateVehicleService.execute({
      vehicle_id,
      vehicle_brand,
      vehicle_model,
      vehicle_year,
      vehicle_code_patrimony,
      vehicle_description,
    });

    return response.status(200).json(vehicle);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Get vehicle by id
vehiclesRouter.get('/:vehicle_id', async (request, response) => {
  try {
    const { vehicle_id } = request.params;

    const showVehicleByIdService = new ShowVehicleByIdService();

    const vehicle = await showVehicleByIdService.execute(vehicle_id);

    return response.status(200).json(vehicle);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Delete vehicle by id
vehiclesRouter.delete('/:vehicle_id', async (request, response) => {
  try {
    const { vehicle_id } = request.params;

    const deleteVehicleService = new DeleteVehicleService();

    const vehicleDeleted = await deleteVehicleService.execute(vehicle_id);

    return response.status(200).json(vehicleDeleted);
  } catch (err) {
    return response.status(400).json(err);
  }
});

export default vehiclesRouter;
