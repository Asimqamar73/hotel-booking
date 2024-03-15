import BadRequest from "../errors/BadRequest.js";
import Hotel from "../models/hotel.model.js";

const registerHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    if (!hotel) {
      throw new BadRequest("Something went wrong. Please try again later");
    }
    res.status(201).json({ hotel });
  } catch (error) {
    next(error);
  }
};

const fetchHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    if (!hotels) {
      throw new BadRequest("Something went wrong. Please try again later");
    }
    res.status(201).json({ hotels });
  } catch (error) {
    next(error);
  }
};

const fetchHotelsByName = async (req, res) => {
  try {
    const hotels = await Hotel.find({
      name: { $regex: req.body.city, $options: "i" },
    });
    if (!hotels) {
      throw new BadRequest("Something went wrong. Please try again later");
    }
    res.status(201).json({ hotels });
  } catch (error) {
    next(error);
  }
};

const fetchHotelsByCity = async (req, res) => {
  try {
    const hotels = await Hotel.find({
      city: { $regex: req.body.city, $options: "i" },
    });
    if (!hotels) {
      throw new BadRequest("Something went wrong. Please try again later");
    }
    res.status(201).json({ hotels });
  } catch (error) {
    next(error);
  }
};

const deleteHotelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Hotel.findByIdAndDelete(id);
    if (!response) {
      throw new BadRequest(`No resource is associated with id ${id}`);
    }
    res.status(200).json({ response, message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};
const updateHotelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Hotel.findByIdAndUpdate(id, req.body);
    if (!response) {
      throw new BadRequest(`No resource is associated with id ${id}`);
    }
    res.status(200).json({ response, message: "Updated successfully" });
  } catch (error) {
    next(error);
  }
};

export {
  registerHotel,
  fetchHotels,
  deleteHotelById,
  updateHotelById,
  fetchHotelsByName,
  fetchHotelsByCity,
};
