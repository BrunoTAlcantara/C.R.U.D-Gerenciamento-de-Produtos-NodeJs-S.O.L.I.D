import { LogController } from '../../../../modules/Logs/usecases/LogController';

const authenticateUseController = new LogController();

const myMiddleware = (req, res, next) => {
  authenticateUseController.handle();
  next();
};

export { myMiddleware };
