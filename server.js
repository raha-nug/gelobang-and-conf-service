import express from "express";

import konfigurasiRoutes from "./src/interfaces/routes/konfigurasiRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", konfigurasiRoutes);
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
