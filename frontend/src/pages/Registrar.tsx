import { useState } from "react";
import { api } from "../services/api";

function Registrar() {

    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ubicacion, setUbicacion] = useState("");

    const registrarIncidencia = async () => {

        const response = await api.post(
            "/api/incidencias",
            {
                categoria,
                descripcion,
                ubicacion,
            }
        );

        alert(
            "Código: " + response.data.codigo
        );
    };

    return (
        <div>

            <h2>Registrar incidencia</h2>

            <input
                type="text"
                placeholder="Categoría"
                onChange={(e) =>
                    setCategoria(e.target.value)
                }
            />

            <br />

            <input
                type="text"
                placeholder="Descripción"
                onChange={(e) =>
                    setDescripcion(e.target.value)
                }
            />

            <br />

            <input
                type="text"
                placeholder="Ubicación"
                onChange={(e) =>
                    setUbicacion(e.target.value)
                }
            />

            <br />

            <button onClick={registrarIncidencia}>
                Registrar
            </button>

        </div>
    );
}

export default Registrar;