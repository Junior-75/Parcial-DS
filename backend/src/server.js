import Fastify from "fastify";
import cors from "@fastify/cors";

import incidenciasRoutes from "./routes/incidencias.js";

const app = Fastify();

await app.register(cors);

app.register(incidenciasRoutes);

app.get("/", async () => {
    return {
        message: "API funcionando",
    };
});

app.listen({
    port: 3000,
});