import { Schema, model } from "mongoose";

const speciesSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  discoveryLocation: {
    type: Schema.Types.String,
    required: true,
  },
  rarity: {
    type: Schema.Types.Number,
    required: true,
  },
  documented: {
    type: Schema.Types.Boolean,
    required: false,
  },
});

const Species = model("Species", speciesSchema);

export default Species;
