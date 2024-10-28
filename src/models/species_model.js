import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
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

const Explorer = model("Explorer", explorerSchema);

export default Explorer;
