import { LogController } from '../../../../modules/Logs/usecases/LogController';

const authenticateUseController = new LogController();

const myMiddleware = function (req, res, next) {
  authenticateUseController.handle();
  next();
};

export { myMiddleware };
