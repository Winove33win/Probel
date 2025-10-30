import express from 'express';
import { setRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Configura as rotas
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});