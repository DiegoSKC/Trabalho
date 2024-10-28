import e from "express";
import explorer_router from "./routers/explorer_router.js";
import species_router from "./routers/species_router.js";
import expedition_router from "./routers/expedition_router.js";
import "dotenv/config";
import "./config/db.js";

const app = e();

app.use(e.json());

app.use("/explorer", explorer_router);
app.use("/species", species_router);
app.use("/expedition", expedition_router);

app.listen(process.env.API_PORT, () =>
  console.log("Servidor conectado com sucesso!")
);