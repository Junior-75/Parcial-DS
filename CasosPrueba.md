# 1. Registro de Incidencia

## Endpoint

```http
POST http://localhost:3000/api/incidencias
```

## Descripción
Este endpoint permite registrar una nueva incidencia en el sistema.

## Body enviado

```json
{
  "categoria": "Bache",
  "descripcion": "Hueco en avenida",
  "ubicacion": "Lima"
}
```

## Respuesta obtenida

```json
{
  "message": "Incidencia registrada",
  "codigo": "INC-524"
}
```

## Resultado esperado

- La incidencia debe registrarse correctamente.
- El sistema debe generar automáticamente un código de seguimiento único.
- La respuesta debe retornar estado HTTP 200 OK.

## Resultado obtenido

La incidencia fue registrada correctamente con el código:

```text
INC-524
```

## Evidencia

<img width="1467" height="387" alt="imagen" src="https://github.com/user-attachments/assets/a9ee3391-32f4-49fb-b1ef-5350622fd8d3" />


---

# 2. Consulta de Incidencia

## Endpoint

```http
GET http://localhost:3000/api/incidencias/INC-524
```

## Descripción
Este endpoint permite consultar una incidencia utilizando el código de seguimiento generado previamente.

## Parámetro utilizado

```text
INC-524
```

## Respuesta obtenida

```json
{
  "id": 1,
  "codigo_seguimiento": "INC-524",
  "categoria": "Bache",
  "descripcion": "Hueco en avenida",
  "ubicacion": "Lima",
  "estado": "Pendiente",
  "fecha_registro": "2026-05-15T15:58:38.983Z"
}
```

## Resultado esperado

- El sistema debe retornar la información completa de la incidencia.
- El estado inicial debe ser "Pendiente".
- La respuesta debe retornar estado HTTP 200 OK.

## Resultado obtenido

La incidencia fue consultada correctamente mostrando todos los datos almacenados.

## Evidencia


<img width="1485" height="382" alt="imagen" src="https://github.com/user-attachments/assets/441d4224-b932-4117-8517-9551a8021da1" />

---
