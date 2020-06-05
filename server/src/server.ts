import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

const porta = 3333;

app.use(errors());

app.listen(porta, () => {
  console.log(`Server rodando na porta ${porta}`);
});
