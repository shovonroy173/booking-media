import express from "express";
import { verifyAdmin } from "../utils/verifyToken";
import { countByCity, createHotel, deleteHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel";
const router = express.Router();

// create
router.post("/" , verifyAdmin , createHotel);

// update
router.put("/:id" , verifyAdmin , updateHotel);

// delete
router.delete(":/id" , verifyAdmin , deleteHotel);

// get
router.get("/find/:id" , getHotel);

// get all
router.get('/'  , getHotel);
router.get("/countByCity" , countByCity);
router.get("/room/:id" , getHotelRooms);

export default router;