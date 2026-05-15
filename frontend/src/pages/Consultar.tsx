import { useState } from "react";
import { api } from "../services/api";

function Consultar() {

    const [codigo, setCodigo] = useState("");
    const [incidencia, setIncidencia] =
        useState<any>(null);

    const consultarIncidencia = async () => {

        const response = await api.get(
            `/api/incidencias/${codigo}`
        );

        setIncidencia(response.data);
    };

    return (
        <div>

            <h2>Consultar incidencia</h2>

            <input
                type="text"
                placeholder="Código"
                onChange={(e) =>
                    setCodigo(e.target.value)
                }
            />

            <button onClick={consultarIncidencia}>
                Consultar
            </button>

            {
                incidencia && (
                    <div>

                        <p>
                            Categoría:
                            {incidencia.categoria}
                        </p>

                        <p>
                            Estado:
                            {incidencia.estado}
                        </p>

                        <p>
                            Descripción:
                            {incidencia.descripcion}
                        </p>

                    </div>
                )
            }

        </div>
    );
}

export default Consultar;