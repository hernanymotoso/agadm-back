import { Router } from 'express';

import CreateProducerService from '../services/CreateProducerService';
import DeleteProducerService from '../services/DeleteProducerService';
import ShowProducerByIdService from '../services/ShowProducerByIdService';
import ShowAllProducersService from '../services/ShowAllProducersService';
import UpdateProducerService from '../services/UpdateProducerService';

import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

const producersRouter = Router();

producersRouter.use(ensureAuthenticated);
// Get all producers
producersRouter.get('/', async (request, response) => {
  try {
    const showAllProducersService = new ShowAllProducersService();

    const users = await showAllProducersService.execute();

    return response.status(200).json(users);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Create producers
producersRouter.post('/', async (request, response) => {
  try {
    const {
      producer_name,
      producer_last_name,
      producer_email,
      producer_phone,
      producer_ID,
      producer_CPF,
      producer_address,
      producer_district,
      producer_city,
      producer_state,
    } = request.body;

    const createProducerService = new CreateProducerService();

    const producer = await createProducerService.execute({
      producer_name,
      producer_last_name,
      producer_email,
      producer_phone,
      producer_ID,
      producer_CPF,
      producer_address,
      producer_district,
      producer_city,
      producer_state,
    });

    return response.status(200).json(producer);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Update producers
producersRouter.put('/', async (request, response) => {
  try {
    const {
      producer_id,
      producer_name,
      producer_last_name,
      producer_email,
      producer_phone,
      producer_ID,
      producer_CPF,
      producer_address,
      producer_district,
      producer_city,
      producer_state,
    } = request.body;

    const updateProducerService = new UpdateProducerService();

    const producer = await updateProducerService.execute({
      producer_id,
      producer_name,
      producer_last_name,
      producer_email,
      producer_phone,
      producer_ID,
      producer_CPF,
      producer_address,
      producer_district,
      producer_city,
      producer_state,
    });

    return response.status(200).json(producer);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Delete producer by  id
producersRouter.delete('/:producer_id', async (request, response) => {
  try {
    const { producer_id } = request.params;

    const deleteProducerService = new DeleteProducerService();

    const producer = await deleteProducerService.execute(producer_id);

    return response.status(400).json(producer);
  } catch (err) {
    return response.status(400).json(err);
  }
});

// Get producer by  id
producersRouter.get('/:producer_id', async (request, response) => {
  try {
    const { producer_id } = request.params;

    const showProducerByIdService = new ShowProducerByIdService();

    const producer = await showProducerByIdService.execute({ producer_id });

    return response.status(400).json(producer);
  } catch (err) {
    return response.status(400).json(err);
  }
});

export default producersRouter;
