import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';
import inputValidation from './config/validation';

/* Controllers */
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (req, res) => res.json({ Ola: 'mundo' }));

/* Lista os items existentes para os pontos de coleta */
routes.get('/items', itemsController.index);

/* Cria um ponto de coleta */
routes.post(
  '/points',
  upload.single('image'),
  inputValidation(),
  pointsController.create
);

/* Lista os pontos de coleta */
routes.get('/points', pointsController.index);

/* Lista um ponto específico */
routes.get('/points/:id', pointsController.show);

export default routes;
