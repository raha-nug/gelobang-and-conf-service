import express from "express";
import cors from "cors";

import konfigurasiRoutes from "../src/interfaces/routes/konfigurasiRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/", konfigurasiRoutes);

export default app;
