import { Router } from "express";
import RoomController from "../Controllers/RoomController.js";
import RoomValidator from "../Validators/RoomValidator.js";
import verifyJwt from "../Middlewares/VerifyJwt.js";


const RoomRoutes = Router();

RoomRoutes.route("/").post( RoomValidator.create, RoomController.create).get(RoomController.getAll);

RoomRoutes
  .route("/:id")
  .get( RoomValidator.get, RoomController.get)
  .delete( RoomValidator.destroy, RoomController.destroy)
  .put( RoomValidator.update, RoomController.update)
  
RoomRoutes.put('/addUser/:id', RoomValidator.addUser, RoomController.addUser);

export default RoomRoutes;
