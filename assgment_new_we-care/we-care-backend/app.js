const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/coach", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb connected ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();

const coachDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
const Item = mongoose.model("Item", coachDetailSchema);

app.get("/api", (req, res) => {
  res.status(200).send({ response: "api worked.." });
});

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      dob: req.body.dob,
      mobile: req.body.mobile,
      password: req.body.password,
      pincode: req.body.pincode,
      state: req.body.state,
      gender: req.body.gender,
      email: req.body.email,
      city: req.body.city,
      country: req.body.country,
    });
    const savedItem = await newItem.save();
    res.status(200).send(savedItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.put("/api/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updatedItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndRemove(req.params.id);
    res.status(200).send({ response: req.params.id });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
