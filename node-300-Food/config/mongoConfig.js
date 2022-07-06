const USERNAME = "mydb";
const PASSWORD = "!Korea8080";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pgeyjw1.mongodb.net/?retryWrites=true&w=majority`;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  b_id: String,
  b_flag: Number,
  b_sdate: String,
  b_food: String,
  b_edate: String,
  b_cancel: Boolean,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
