import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 25,
      minLength: 5,
      required: [true, "Please provide hotel name."],
    },
    city: {
      type: String,
      required: [true, "Please provide city name."],
    },
    address: {
      type: String,
      required: [true, "Please provide address."],
    },
    totalRooms: {
      type: Number,
      required: [true, "Please provide number of rooms."],
    },
    rating: {
      type: Number,
      required: [true, "Please provide rating."],
      default: 1,
    },
  },

  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
