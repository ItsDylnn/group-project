// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const cars = [
  { make: "Toyota", model: "Corolla", year: 1993 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "BMW", model: "X5", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
];

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
