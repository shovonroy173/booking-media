import express from "express";

import {verifyAdmin} from "../utils/verifyToken";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room";

const router = express.Router();

router.post("/:hotelid" , verifyAdmin , createRoom);

router.put("/availability/:id" , updateRoomAvailability);
router.put("/:id" , verifyAdmin , updateRoom);

router.delete("/:id/:hotelid" , verifyAdmin , deleteRoom);

router.get("/:id" , getRoom);

router.get("/" , getRooms);