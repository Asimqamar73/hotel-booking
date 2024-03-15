import express from "express";
import {
  deleteHotelById,
  fetchHotels,
  fetchHotelsByCity,
  fetchHotelsByName,
  registerHotel,
  updateHotelById,
} from "../controllers/hotel.controller.js";

const router = express.Router();

router.route("/").post(registerHotel).get(fetchHotels);
router.route("/:id").delete(deleteHotelById).put(updateHotelById);
router.post("/hotel-by-city", fetchHotelsByName);
router.post("/hotel-by-city", fetchHotelsByCity);

export default router;
