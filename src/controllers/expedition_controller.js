import Expedition from "../models/expedition_model.js";

export const store = async (req, res) => {
  try {
    await Expedition.create(req.body);
    res.status(201).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const index = async (req, res) => {
  try {
    let content = await Expedition.find().exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const show = async (req, res) => {
  try {
    let content = await Expedition.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const update = async (req, res) => {
  try {
    let content = await Expedition.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    let content = await Expedition.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error.message);
  }
};