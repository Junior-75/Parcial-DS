import { pool } from "../db.js";

export default async function (fastify) {

    // Registrar incidencia
    fastify.post("/api/incidencias", async (request) => {

        const {
            categoria,
            descripcion,
            ubicacion,
        } = request.body;

        const codigo =
            "INC-" + Math.floor(Math.random() * 100000);

        await pool.query(
            `
      INSERT INTO incidencias
      (
        codigo_seguimiento,
        categoria,
        descripcion,
        ubicacion,
        estado
      )
      VALUES ($1,$2,$3,$4,$5)
      `,
            [
                codigo,
                categoria,
                descripcion,
                ubicacion,
                "Pendiente",
            ]
        );

        return {
            message: "Incidencia registrada",
            codigo,
        };
    });

    // Consultar incidencia
    fastify.get(
        "/api/incidencias/:codigo",
        async (request) => {

            const { codigo } = request.params;

            const result = await pool.query(
                `
        SELECT * FROM incidencias
        WHERE codigo_seguimiento = $1
        `,
                [codigo]
            );

            return result.rows[0];
        }
    );
}