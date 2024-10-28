import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
  location: {
    type: Schema.Types.String,
    required: true,   
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  participants: {
    type: Schema.Types.ObjectId,
    ref: "Participants",
    required: true,
  },
  speciesFound: {
    type: Schema.Types.ObjectId,
    ref: "SpeciesFound",
    required: true,
  },
});

const Expedition = model("Expedition", expeditionSchema);

export default Expedition;