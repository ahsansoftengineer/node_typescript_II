import { Application } from "express";
import IndexController from "../controllers/index.controllers";
// import IndexController from "../controllers/index";

const RoutingRegisteration = (app: Application) => {
  // app.get('/', (req, res) => IndexController.register(req, res))
  app.get('/', IndexController.Index)
}
export default RoutingRegisteration